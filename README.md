# MSA Phase 1 - Front End Development Path

You can visit the deployed webapp by clicking this [link](https://search-github-users.azurewebsites.net/) or by copy-pasting this link into a browser https://search-github-users.azurewebsites.net/


## Build Pipeline
The build pipeline ensures a continous deployment to create new releases on new commits to `develop` and `master` branches. 

Each time there's a new commit to any of these branches, the pipeline builds the code and creates an artifact, then this artifact is published for the release pipeline to be used. 

This is done to make sure that the new code builds alongside the old code without any errors.

## Release Pipeline
The release pipeline ensures a continous deployment to deploy the release to Azure for new commits to ONLY the `master` branch. 

It releases the artifact published by the build pipeline.

In this case, we only want to release the master branch for the users and use the other branches for developing and testing the app. Once we are ready to release the other branches, we can merge them to master which will then trigger the release.
