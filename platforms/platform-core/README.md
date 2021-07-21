# Core Platform

The Jovo Core Platform is a standalone [platform integration](../docs/platforms.md) that can be used to deploy a voice experiences to custom devices and hardware, including the web, mobile apps, and Raspberry Pi.
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Requests and Responses](#requests-and-responses)

## Introduction

![Jovo Client and Jovo Core Platform](https://github.com/jovotech/jovo-framework/raw/master/jovo-platforms/jovo-platform-core/img/jovo-client-platform-communication.png "How Jovo Core Platform communicates with clients like web apps")

Besides integrations with major platforms like Alexa, Google Assistant, or Facebook Messenger, Jovo also enables you to connect your own clients to build fully custom conversational experiences for both voice and chat.

As each platform comes with its own structure for requests and responses, companies often create their own internal platform integration with Jovo.

To make the process easier, we created the Jovo Core Platform which comes with its own request and response JSON structure and a lot of helpful features off-the-shelf.

The Jovo Core Platform can be connected to any client (the "frontend" that records speech or text input and passes it to the Jovo app). You can either implement your own client or use existing [Jovo Clients](https://www.jovo.tech/marketplace/tag/clients).

The client sends a request to the Jovo app that may contain audio, text, or other input. The Jovo Core Platform then deals with this information and returns a response back to the client. [Learn more about the Core Platform request and response structures below](#requests-and-responses).

Depending on the client, it may be necessary to add integrations to the platform to convert the input to structured data:

* [Automatic Speech Recognition (ASR)](https://www.jovo.tech/marketplace/tag/asr) to turn spoken audio into transcribed text
* [Natural Language Understanding (NLU)](https://www.jovo.tech/marketplace/tag/nlu) to turn raw text into structured input

After these integrations are added, building a Jovo app for custom clients is similar to building for platforms like Alexa and Google Assistant.

## Getting Started

You can install the plugin like this:

```sh
$ npm install @jovotech/platform-core --save
```

Add it as plugin to your [app configuration](../docs/app-config.md), e.g. `app.ts`:

```typescript
import { App } from '@jovotech/framework';
import { CorePlatform } from '@jovotech/platform-core';
// ...

const app = new App({
  plugins: [
    new CorePlatform(),
    // ...
  ],
});
```

## Requests and Responses

// TODO