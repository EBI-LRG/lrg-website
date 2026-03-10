# Build stage
FROM ruby:2.7-slim AS builder

RUN apt-get update && apt-get install -y \
    build-essential \
    wget \
    git \
    && rm -rf /var/lib/apt/lists/*

COPY Gemfile* /tmp/
WORKDIR /tmp

RUN gem install bundler -v 2.4.22
RUN bundle install

COPY . /site
WORKDIR /site

# Download required data files
RUN mkdir -p indexes && \
    wget -O indexes/lrg_index.json https://ftp.ebi.ac.uk/pub/databases/lrgex/data_files/lrg_index.json && \
    wget -O indexes/step_index.json https://ftp.ebi.ac.uk/pub/databases/lrgex/data_files/step_index.json && \
    wget -O indexes/lrg_search_terms.txt https://ftp.ebi.ac.uk/pub/databases/lrgex/data_files/lrg_search_terms.txt

# Build the site
RUN bundle exec jekyll build

# Serve stage
FROM caddy:alpine

COPY --from=builder /site/_site /usr/share/caddy