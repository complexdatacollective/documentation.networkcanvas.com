---

title: Protocol Schema Information
parent: Technical Documentation
nav_exclude: true
---

## Summary

Interviewer and Architect (from version 4.2.0 onward) implement a feature that tracks the version of the protocol file format, or "schema", associated with any protocol files that you author or work with.

You may notice messaging within the app that informs you of "out of date", or "obsolete" schema versions associated with your protocol. This article will explain these concepts in greater detail.

**The key takeaway is that as long as your schema is not marked "obsolete", you can continue to use Interviewer to collect and export data, exactly as before.**

During the beta period, we _strongly_ encourage you to update your protocol files wherever possible, so that you are able to evaluate the newest Network Canvas features.

Please note that since Android and iOS auto-update all applications by default, users must manually disable this process if they wish to continue using a particular version of an app to ensure it remains compatible with their existing protocols (rollback to prior versions is not possible on these platforms). We urge users to follow the advice set out in the [configuring devices prior to starting data collection](../research-design/configuring-devices.md) article to ensure they are not caught out.
{: .tip-box .caution}

## Why it matters

| Key Concept: Protocol Schema                           |
| :----------------------------------------------------------- |
| A protocol "schema" is a document that defines how to determine the validity of a protocol file. It takes the form of a series of constraints and logical rules that define property names, data types, and structure. When a protocol is used within Architect or Interviewer, it is validated against a schema. Unexpected values, properties, or structures will trigger various types of warning or error message. <br/><br/> We adopted schemas in an effort to ensure stability and consistency within the functioning of the software. If a protocol is valid according to its schema, it should function without issues. |
{: .key-concept }

We need to "version" Network Canvas protocol schemas so that we can add or change features as we develop them. This could mean implementing a new interface, or changing the way that an existing function, such as skip logic, works. Simply changing an existing schema would make previously authored protocols invalid, or would lead to functionality not being available.

Our priority when implementing schema versioning has been to not burden the end user, either through creating "maintenance work" (for example by requiring older protocols to be updated manually), or by disrupting your workflow (for example by preventing existing protocols from functioning).

## What it means for you

When you update Interviewer or Architect, you may encounter messages when using protocols that were authored in prior versions of the apps.

### In Interviewer

In Interviewer, you may see a blue light bulb icon, or a red robot icon, on your protocol card when viewing it on the start screen (see below).

![](/assets/img/protocol-schema/nc-ood.png)

Where a new schema is backward-compatible with a prior version you will see a blue light bulb, and Interviewer will continue to support installing and running protocols of that version without any issues. This means that if you are happy with your protocol file **you do not need to take any action**. Your protocol will continue to function as before, albeit without access to new functionality implemented with the new schema version (see the [compatibility table](#compatibility-table) below for details on this).

If you wish to update their protocol file to the new schema version, follow the instructions provided below under [migrating a protocol](#migrating-a-protocol).

If your protocol is no longer compatible with the version of Interviewer that you have installed, you will see a red robot icon, and will no longer be able to start an interview. Please see the section below on [handling obsolete protocols](#handling-obsolete-protocols) for further assistance.

### In Architect

In Architect, you may see a prompt that a protocol must be migrated to a newer version before it can be opened (see below).

![](/assets/img/protocol-schema/architect-migrate.png)
  
If you wish to update their protocol file to the new schema version, follow the instructions provided below under [migrating a protocol](#migrating-a-protocol).

If you would like to continue editing this protocol without migrating it to the latest version, you will need to downgrade your version of Architect. See the [GitHub releases page](https://github.com/complexdatacollective/Architect/releases) for an archive of old versions, and consult for the [compatibility table](#compatibility-table) for information about which version you need.

## Handling obsolete protocols

Although there are no plans to implement schema changes that are not backward-compatible, we must nonetheless reserve this possibility in the event it becomes necessary. If a new schema version is implemented that is not backward-compatible, the user interface in Interviewer will mark the protocol as "obsolete" and will no longer allow new interview sessions to be started. Although this is obviously undesirable, **all existing session data will continue to be exportable from a protocol in this state**.

Obsolete protocols will still be able to be migrated to the latest schema version by Architect, although in some cases there may be unavoidable data loss. For example, if we add required properties to the protocol that cannot be derived from existing properties, or if we change the data model. Contact us if you have encountered an issue, or have specific concerns about this.

### What to do if your protocol is marked as obsolete

If your protocol is marked as obsolete, and you wish to continue collecting data using it, you have two options:

1. Migrate the protocol to a later version, which is compatible with your version of Interviewer. See [migrating a protocol](#migrating-a-protocol) below for this.
2. Downgrade your version of Interviewer, by uninstalling your current version, and downloading the version you require from our [GitHub releases page](https://github.com/complexdatacollective/Interviewer/releases). As per the warning at the start of this article, downgrading is not possible on iOS or Android platforms. If you have mistakenly upgraded your Interviewer version on these platforms causing your protocol to become obsolete, your only choice is to migrate your protocol to the latest schema version and to redeploy it.

## Migrating a protocol

Migrating a protocol happens within Architect, and is automatic. The process works as follows:

 1. Ensure you are on the latest version of the Architect app. When opening the app with an active internet connection, the app will check for updates automatically, and notify you if any are found. Alternatively, you can manually update the app, by visiting our download page and installing the latest version for your platform.
 2. Once you are running the latest version, open the protocol file that you wish to migrate.
 3. Architect will inform you that the protocol file can be upgraded, which happens by creating a copy (so that your original file is preserved). If you choose to continue, you will be prompted for a location to save your upgraded protocol.
 4. Architect will automatically append "(schema version X)" to the filename, which may help you to keep track of the different versions of your protocol, and to differentiate them within Server and Interviewer.

Schema changes may represent changes to the underlying network data model and, therefore, protocols migrated from one schema version to another must be treated as different workspaces within Server (shown below). Users that do migrate their protocols to a new schema compatible version will need to create a merging script to handle combining the two data sources from the two workspaces once exported. Although this process introduces an extra step in a user workflow, it promotes better quality data and greater user control.
{: .tip-box .caution}

## Compatibility Table

See the table below for detailed compatibility information. To use this chart, look up the version of Architect that your protocol file was authored in to find which versions of Interviewer can be used with it.

|                               | Architect Alpha Versions | Architect 4.0.0-4.1.2 | Architect 4.2.0 |
|-------------------------------|-----------------|----------------|-----------------|
| Network Canvas Alpha Versions | ✅               |          ❌     |        ❌         |
| Network Canvas 4.0.0 and 4.0.7                   |      ❌           |        ✅        |        ❌        |
| Network Canvas 4.2.0                   |           ❌      |       ✅ ⚠️<sup><a href="#schema-1">(See 1)</a></sup>         | ✅               |

✅ = protocol can be installed and used
⚠️ = some features missing
❌ = incompatible

<p><sup id="schema-1">1</sup> Stage level node filtering unavailable, and categorical/ordinal variables cannot be used in skip logic or filter queries.</p>

## Technical implementation of schema migration

The following section may be useful if you are attempting to understand how schema migration is performed on a technical level. In rare cases, this may help you to troubleshoot an issue with a migrated protocol yourself, should you wish.

- A migration between two sequential schema versions is expressed as a functional transformation of the protocol's JSON object. This transformation results in a mutated protocol object, which is the output of the transformation.
- At present, no mutation has been required by our schema changes, since all changes have been backward compatible, and have simply involved changing the validation rules to permit additional protocol properties and values.
- Transformations can be chained together, meaning that a protocol can be migrated from version 1 to version n by applying all transformations in between in sequence [1 … n].
- We plan a parallel system of "patching", which will use the same technique as migration, but is designed to address any data corruption issues caused as a result of bugs in Architect. Patches are designed to fix protocol issues without updating the schema version.
