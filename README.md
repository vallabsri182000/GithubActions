# GitActionsPOC
Utilized for POC purpose

## Structure of project

- test-app/
    - .github/
        - workflows/
            - ci.yml
    - src/
        - index.js
    - test/
        - test.js
    - package.json
    - package-lock.json
    - README.md


## Basic Workflow steps

- **Checkout repository:** Checks out your repository code so the workflow can access it.
- **Set up Node.js:** Sets up Node.js on the runner.
- **Install dependencies:** Installs the required Node.js dependencies.
- **Run tests:** Runs the tests using the `npm test` command.
- **Create a release:** Creates a new release if a tag is pushed. This step only runs if the event is a push to a tag.
- **Upload release asset:** Uploads the build artifact as a release asset.


## Workflow

### Workflow syntax -

**ref:** [Github Actions - run-name](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#run-name)

### Triggering the Workflow through events -

**ref:** [Github Actions - events](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)

- On `Push`: The workflow runs on any push to the main branch.

- On `Pull Request`: The workflow runs on any pull request to the main branch.

- On Tag Push: The release job runs when a new tag is pushed.
    - **Eg:** `github.event_name == 'push' && contains(github.ref, 'refs/tags/')`

### Using Github contexts -

**ref:** [Github Actions - Github Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts#github-context)

- `${{ github.actor }}`:
    - The username of the user that triggered the initial workflow run.

- `${{ github.ref }}`:
    - The fully-formed ref of the branch or tag that triggered the workflow run.

- `${{ secrets.GITHUB_TOKEN }}`:
    - A token to authenticate on behalf of the GitHub App installed on your repository.


## Actions used reference

- `actions/checkout@v3`:
    - **ref:** [Github Actions - checkout](https://github.com/actions/checkout)

- `actions/setup-node@v3`:
    - **ref:** [Github Actions - setup-node](https://github.com/actions/setup-node)

- `actions/create-release@v1` & `actions/upload-release-asset@v1` :
    - **ref:** [Github Actions - upload-release-asset](https://github.com/actions/upload-release-asset)


## Create a Tag for Release

```
git tag v1.0.0
git push origin v1.0.0
```