<div align="center">
  <a href="https://koyeb.com">
    <img src="https://www.koyeb.com/static/images/icons/koyeb.svg" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Koyeb Serverless Platform</h3>
  <p align="center">
    Deploy in-app notifications with an Astro application using server-sent events on Koyeb
    <br />
    <a href="https://koyeb.com">Learn more about Koyeb</a>
    ·
    <a href="https://koyeb.com/docs">Explore the documentation</a>
    ·
    <a href="https://koyeb.com/tutorials">Discover our tutorials</a>
  </p>
</div>


## About Koyeb and the Astro application with in-app notifications using server-sent events example

Koyeb is a developer-friendly serverless platform to deploy apps globally. No-ops, servers, or infrastructure management required.

This repository contains an Astro application that sends in-app notifications using server-sent events that you can deploy on the Koyeb serverless platform for testing.

This example application is designed to show how an application using Astro and server-sent events can be deployed on Koyeb.

## Getting Started

Follow the steps below to deploy and run the Astro application on your Koyeb account.

### Requirements

You need a Koyeb account to successfully deploy and run this application. If you don't already have an account, you can sign-up for free [here](https://app.koyeb.com/auth/signup).

### Deploy using the Koyeb button

The fastest way to deploy the Astro application is to click the **Deploy to Koyeb** button below.

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/apps/deploy?type=git&repository=github.com%2Fkoyeb%2Fexample-in-app-notifications-sse&branch=main&name=example-in-app-notifications-sse)

Clicking on this button brings you to the Koyeb App creation page with everything pre-set to launch this application.

_To modify this application example, you will need to fork this repository. Checkout the [fork and deploy](#fork-and-deploy-to-koyeb) instructions._

### Fork and deploy to Koyeb

If you want to customize and enhance this application, you need to fork this repository.

If you used the **Deploy to Koyeb** button, you can simply link your service to your forked repository to be able to push changes.
Alternatively, you can manually create the application as described below.

On the [Koyeb Control Panel](//app.koyeb.com/apps), click the **Create App** button to go to the App creation page.

1. Name your App, for example `in-app-notifications`, and click **Next**.
2. Select **GitHub** as the deployment method to use.
3. In the repositories list, select the repository you just forked.
4. Then, give your Service a name, for example `main`, and click **Create Service**.

You land on the deployment page where you can follow the build of your application. Once the build is completed, your application is being deployed and you will be able to access it via `<YOUR_APP_NAME>-<YOUR_ORG_NAME>.koyeb.app`.

## Contributing

If you have any questions, ideas or suggestions regarding this application sample, feel free to open an [issue](https://github.com/koyeb/example-in-app-notifications-sse/issues) or fork this repository and open a [pull request](https://github.com/koyeb/example-in-app-notifications-sse/pulls).

## Contact

[Koyeb](https://www.koyeb.com) - [@gokoyeb](https://twitter.com/gokoyeb) - [Slack](http://slack.koyeb.com/)
