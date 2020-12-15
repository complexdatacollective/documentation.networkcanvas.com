---
layout: default
title: Project Overview
nav_order: 1
last_modified_at: 2020-12-14
---
 
## Overview

The Network Canvas Software Suite is different from many existing survey tools, most of which have been optimized for capturing individual rather than network data. Our tool captures data about both the individual and their social network through intuitive and engaging touch-optimized interfaces. By visually representing people, places, and concepts as nodes alongside relationships between the nodes and attributes of nodes and relationships, Network Canvas can make seemingly complex data more manageable and intuitive in an interview setting.

To provide an overview of the project, including background information about our team, our aims and objectives, and the functionality of the software, we have created the following promotional video.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XzfE6j-LnII" frameborder="0" allowfullscreen style="margin: 0 auto; display: block"></iframe>

## Three Applications

The Suite consists of three applications:

- **Architect** - A tool for building Network Canvas interview protocols
- **Interviewer** - An tool that loads and administers interview protocols to study participants
- **Server** - A tool for researchers to manage their data and coordinate the survey deployment process

These three applications work together to provide a seamless end-to-end workflow up to the point of analysis.

![image](/assets/img/introduction-images/workflow@2x.png)

### Which applications do I need?

Although the Network Canvas software is designed to provide a complete end-to-end workflow when used together, you do not need to use all elements of the suite in all circumstances.

In particular, smaller studies may find that they do not need to use the Server application, since it mostly benefits scenarios where large numbers of field devices running Interviewer must be managed, and data received into a central location. If this is not a requirement for your study, you can choose instead to export data directly from Interviewer.

If you choose not to use Server you will also need to consider the logistics of loading your interview protocol onto your field device. This is discussed in our tutorial article on using Interviewer.

## Design Principles

Before we go into any further specifics, we will next describe a few of the core design principles that underlie the Software.

### Ontological Flexibility

Social networks are not a singular methodology, but a broad approach to research which straddles multiple disciplines and research ontologies. Therefore, we have focused on creating a flexible suite of tools which have few constraints on the type of study that can be developed.  

Researchers construct their own protocols - customized to their own needs. And protocols are built within Architect, by selecting from a number of Interfaces which we've designed to be optimized for the collection of specific types of data. Each Interface is also able to be customized.  

Furthermore, both nodes and edges are able to be generated in multiple ways. For researchers utilizing rosters, interviewees are able to select their alters from pre-loaded lists, or type into text fields which search and filter. For researchers not utilizing rosters, researchers have two options: an ultra quick name generation interface for when only a name is required to be captured, or a Name Generator which uses per-alter forms to capture detailed attributes.

Our tool also allows the capture of multiple relationships between entities, and while these might be people, they may be places visited, events attended, or relationships with particular medical providers.

### In-person and Interviewer-assisted

Our tool requires that interviews occur in the presence of an interviewer, on an interviewer-controlled machine, as we found that both remote interviews and interviews conducted on participant devices were too difficult to ensure appropriate privacy and quality of user experience.

Therefore, interviewers are expected to pre-install the Network Canvas App on study devices, as well as pre-load the appropriate interview protocol, and finally, assist with the transfer of data to the server after the interview. 

However, we have found that the level of engagement during the actual interview is able to vary quite a bit depending on the level of complexity of the protocol. 

{% include nc-image src="/assets/img/introduction-images/interviewer-assisted.png" caption="An interviewer assisted interview" %}

### Visualization

Network Canvas prioritizes good visual design and intuitive touch interactions. Our focus on the design and feel of the tools sets us apart from other survey tools - and academic softwares, in general - we also believe our focus on quality design helps make abstract concepts more tangible to participants and researchers.

{% include nc-image src="/assets/img/introduction-images/visual.png" caption="A Network Canvas interview running on an iPad pro" %}

### End-to-end Workflow

We've created an end-to-end workflow with the aim of lowering costs (both material and technical) for network researchers. We also believe this will increase the potential for reproducibility across network studies.

### Open-Source Development

Key in sustaining this Software Suite is input and collaboration with the community. Therefore, all development is open-source. 

We established a not for profit entity (The Complex Data Collective - or CODACO) which owns all IP and copyright associated with the project. This entity then grants a license to any user of the software under something called the General Public License.

You may have heard of it (it is popular in open source software) but it provides anyone who wants to use our software certain guaranteed freedoms.

* Freedom to use the software commercially, without restriction
* Freedom to modify the software however they see fit
* Freedom to distribute the software

These freedoms are protected by some requirements built into the GPL license:

* Any modifications must be made available under the GPL license
* You must include a copy of the original source code with any versions you distribute, making it possible for others to modify

We have guidelines on managing contributions and collaborations to the project that we will be happy to discuss later if that interests you. We believe the fact that this is an open source software that is "owned" by a not for profit entity means that it should be possible to make extending it compatible with the policies of grant awarding bodies.

{% include nc-image src="/assets/img/introduction-images/codaco.png" caption="The Complex Data Collective GitHub page, where our sourcecode is available" %}

