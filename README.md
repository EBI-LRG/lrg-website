# LRG Website

This repository contains the source code for the official website of the Locus Reference Genomic (LRG) project. LRG provides stable, manually curated reference sequences for genes to enable consistent reporting of clinically relevant sequence variants.

The site is built using Jekyll and served via Caddy in a Docker container.

## Requirements

- Docker (for containerized builds and runs)
- Ruby 2.7+ and Bundler (for local development)
- kubectl (for Kubernetes deployment)

## Local Development

1. Install dependencies:
   ```bash
   gem install bundler -v 2.4.22 # if needed
   bundle install
   ```

2. Download required data files:
   ```bash
   wget -O indexes/lrg_index.json https://ftp.ebi.ac.uk/pub/databases/lrgex/data_files/lrg_index.json
   wget -O indexes/step_index.json https://ftp.ebi.ac.uk/pub/databases/lrgex/data_files/step_index.json
   wget -O indexes/lrg_search_terms.txt https://ftp.ebi.ac.uk/pub/databases/lrgex/data_files/lrg_search_terms.txt
   ```

3. Build and serve the site:
   ```bash
   bundle exec jekyll build
   bundle exec jekyll serve
   ```
   Visit http://localhost:4000

## Docker Deployment

1. Build the image:
   ```bash
   docker build --platform linux/amd64 -t lrg-website .
   ```

2. Run the container:
   ```bash
   docker run -p 8080:80 lrg-website
   ```
   Visit http://localhost:8080

## Kubernetes Deployment

1. Ensure the namespace exists:
   ```bash
   kubectl create namespace lrg-website-prod
   ```

2. Apply the manifests:
   ```bash
   kubectl apply -f k8s/ -n lrg-website-prod
   ```

3. Check status:
   ```bash
   kubectl get pods,svc -n lrg-website-prod
   ```

4. Access via NodePort (for testing):
   Get the node IP and port from `kubectl get svc lrg-website-nodeport -n lrg-website-prod`

5. Ingress:
   The repository includes `k8s/ingress.yaml` to route `www.lrg-sequence.org` to the `lrg-website-clusterip` service.

For testing puposes, you can build and push the image manually using the following commands:

```bash
docker build --platform linux/amd64 -t dockerhub.ebi.ac.uk/ensembl-apps/lrg-website .
docker push dockerhub.ebi.ac.uk/ensembl-apps/lrg-website
```

This mimics the build job in CI/CD. The image should appear in the container registry after it's pushed successfully

For production, set up an Ingress for the ClusterIP service.

If you need to create a pull secret, do so under `Settings > Repository > Deploy tokens` and run the following command:
```bash
kubectl create secret docker-registry lrg-registry-secret --docker-server=dockerhub.ebi.ac.uk --docker-username=<GENERATED_USERNAME> --docker-password=<GENERATED_DEPLOY_TOKEN> --docker-email=<EMAIL_GOES_HERE> -n lrg-website-prod 
```

## CI/CD

The repository includes a GitLab CI pipeline (`.gitlab-ci.yml`) that automatically builds the Docker image and deploys to Kubernetes on the master branch (manual trigger).

Set the following CI/CD variables in GitLab:
- `CI_REGISTRY`: `dockerhub.ebi.ac.uk`
- `CI_REGISTRY_USER`: Docker Hub username
- `CI_REGISTRY_TOKEN`: Docker Hub access token
- `KUBE_CONFIG_INFO`: Base64-encoded kubeconfig for the cluster

## Original Documentation

Development and deployment instructions are available at:
https://embl.atlassian.net/wiki/spaces/LRG/pages/23500590/LRG+website+settings
