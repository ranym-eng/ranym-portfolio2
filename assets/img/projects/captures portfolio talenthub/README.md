# TalentHub portfolio captures

These assets tell one concise story: a working product was transformed into a secure, automated and operable cloud service.

## Recommended order

1. `assets/talenthub-01-product.png`
   **TalentHub live product.** Production release of the project operating system, delivered as a secure HTTPS service.

2. `assets/talenthub-02-product-workflow.png`
   **Project workflow.** Populated Project Explorer showing five fictional demo initiatives across active, review, recruitment and completed lifecycle states.

3. `assets/talenthub-02-architecture.png` (`.svg` source included)
   **Production architecture.** Public ingress, private application and database services, automated delivery, monitoring and recovery on FelCloud.

4. `assets/talenthub-03-ci-pipeline.png`
   **Continuous integration.** Quality gates and immutable container image publishing with GitHub Actions and GHCR.

5. `assets/talenthub-04-cd-deployment.png`
   **Continuous delivery.** Automated deployment of immutable images to FelCloud with deployment validation.

6. `assets/talenthub-05-monitoring.png`
   **Observability.** Prometheus target health for the web application, API and container metrics.

7. `assets/talenthub-06-backup-recovery.png`
   **Recovery readiness.** Scheduled PostgreSQL backups with checksum and remote-storage verification.

For a compact six-image portfolio, keep the product workflow and omit the backup screenshot from the main gallery; the recovery capability remains visible in the architecture diagram.

## Short project description

I owned the Cloud and DevOps workstream for TalentHub within a three-person team. I designed the production architecture on FelCloud, containerized and automated the delivery path with Docker, GitHub Actions and GHCR, and implemented monitoring and database recovery controls. The result connected the developers' Next.js, NestJS and PostgreSQL application to a secure, observable and reproducible production environment.

## Important publishing notes

- The images in this folder are sanitized portfolio copies. Keep the original operational screenshots private.
- The Project Explorer uses a fictional local account and fictional demonstration data created specifically for the portfolio capture.
- Do not publish IP addresses, SSH usernames, hostnames, repository ownership, secrets, storage buckets or infrastructure identifiers.
- Present the backup image as sanitized operational evidence, not as an audit record; identifying values and dates were replaced.
- Do not use the existing `02-projects.png`: it displays an expired-token error and an empty project state.
