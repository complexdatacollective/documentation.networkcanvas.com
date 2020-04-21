---
layout: default
parent: Tutorials
title: Building a protocol using Architect
nav_order: 2
last_modified_at: 2019-06-27
---

## Introducing Architect

This article introduces you to creating a protocol using Architect, by trying to rebuild the protocol we previewed in the previous session.

Architect is a desktop application which runs on Windows, macOS, and Linux operating systems. You don’t need to run Architect on the computer that you use to run Network Canvas or Server.

{% include nc-image src="assets/img/architect-guide/1.png" %}

This is the start screen in Architect. It presents you with three options:

* Create a blank new protocol
* Open an existing one from the file browser
* Open a recently opened protocol. If you are launching the app for the first time, this panel will be empty.

| Key Concept: Network Canvas protocol files                          |
| :----------------------------------------------------------- |
| Network Canvas protocols are stored in a file with the extension .netcanvas<br/><br/>They are just like any other files on your computer. You can move them around, rename them (more about this later), and you can (and should!) back them up.<br/><br/>The `.netcanvas` file contains all of the data in your protocol. So if you use roster data, images, or video, these will be embedded within the file. | 
{: .key-concept }

We are going to start by creating a blank protocol, so click “create new” and save the file with a name and location that you will be able to find later.

And this takes us to the main protocol overview screen for our new protocol.

{% include nc-image src="assets/img/architect-guide/2.png" %}

| Key Concept: The protocol editing screen                          |
| :----------------------------------------------------------- |
| The gray panel is called the "overview panel", and it shows the protocol name and description, and has two buttons for managing assets and managing the codebook.<br/><br/>In the top left, you can see the Architect logo. Clicking this button will take you out of the current protocol, and back to the start screen.<br/><br/>Extending out of the bottom of the overview panel is a red line which represents the "timeline". This is a key metaphor that runs between Architect and Network Canvas. The timeline represents the sequence of stages that the participant passes through during the interview. As we add stages to our interview, they will appear on this line, from top to bottom. |
{: .key-concept }

The protocol description is optional. Whatever you enter will show up in the Network Canvas App on the start screen, and when browsing the list of available protocols from Server.

For now, we have a single button at the bottom of the screen, which enables us to add a new stage.

## Creating an Ego Form

We are going to start by creating an Ego Form stage like we saw in the public health example protocol.

Click the add stage button. You will see a screen allowing you to choose between all the types of interfaces we have currently implemented.

{% include nc-image src="assets/img/architect-guide/3.png" %}

Each stage is designed for a specific task within a network interview. For now, scroll down and select the “Ego Form” interface from the “Name Interpreters” section.

{% include nc-image src="assets/img/architect-guide/4.png" %}

This is the Ego Form’s edit screen, and it allows us to customize our new stage.

### Setting the stage name

All stages have a name, which is shown next to the stage icon in the timeline and lets you quickly differentiate between stages of the same type. We will call our stage “Ego Form 1”, so enter this text under “Stage Name”.  When creating your own protocols, we encourage you to use a system for naming your stages.

### Introduction Panel

The introduction panel is a feature of the ego form interface that lets you introduce the form to the participant. You might use it to explain which data you are asking for, and why. In our case we will welcome the participant to the study, and explain the purpose of this screen.

{% include nc-image src="assets/img/architect-guide/5.png" %}

### Form

The next section is where we define the fields which will be shown to the participant within this stage of the protocol.

Fields capture data about a participant, and are where specific variables are defined.  

For example, let’s start by asking for our participant’s name. We click “create new field” and are asked to create or select a variable.

{% include nc-image src="assets/img/architect-guide/6.png" %}

| Key Concept: Creating vs selecting variables                          |
| :----------------------------------------------------------- |
| Many screens in Architect allow you to either create a new variable, or select an existing variable. If this is the case, the text next to the input will usually tell you.<br/><br/>When you want to create a new variable, simply type into the box, and the option to create the variable will appear.<br/><br/>Otherwise, click inside the box to view a list of existing variables that you can choose from. |
{: .key-concept }

In this case, since we have no variables within this protocol yet, we need to create one. Type “EgoName” into the variable name box (again, consider using a consistent variable naming scheme), and press enter. This creates the variable.

Next, we must provide the question prompt - or the text that will accompany this field in the form. We will use “What is your name?”.

Finally, we choose the input control that will be shown to collect this variable.

| Key Concept: Input controls                          |
| :----------------------------------------------------------- |
| Architect and Network Canvas implement many different types of input control [text, number, checkbox group, toggle, radio button group, toggle button group], and we hope to add even more in the future.<br/><br/>This is because the most appropriate interface for assigning a variable depends very much on the specific nature of the variable, and not just on its data type.<br/><br/>For example, when collecting an ordinal variable that represents a likert scale, you might prefer a range slider OR a group of radio buttons. When collecting a numeric variable, you might want to provide plus and minus buttons that can easily be tapped, rather than having the participant type a value. |
{: .key-concept }

Because this is a simple text variable, we choose the text input.

Finally, we can define our validation requirements -- if any -- for this field. We will indicate that this text field is required and give it a maximum length. The validation options available vary depending on the type of variable. In the case of our “name”, we will set the maximum length to 12 characters.

{% include nc-image src="assets/img/architect-guide/7.png" %}

Click “save and continue”, and we have created our first form field.

### Creating a categorical variable

Let’s next repeat that process, but this time creating a categorical variable to model the participant’s race.

Click “create new” under the form fields section, and type “EgoRace” into the variable name box (pressing enter to create the variable), and give it the prompt “How would you describe your racial identity?”.

This time, we will choose an input control appropriate for a categorical variable. We have the choice between a conventional checkbox group, a radio button group, or a toggle button group. We are going to use the checkbox group for this example.

Selecting this input control tells Architect that we are creating a categorical variable, which means it asks us to enter some possible values for the participant to choose between.

For each option we will enter a label and a value. The value is what will be stored in our dataset. Both text and numerical values are allowed. Complete the labels and values as in the screenshot below, and click “save and continue”.

{% include nc-image src="assets/img/architect-guide/8.png" %}

Back on our edit screen, we can see the two fields we have created. Note that you can reorder them by dragging the handle.

{% include nc-image src="assets/img/architect-guide/9.png" %}

### Preview Mode

We can now take the opportunity to see what our stage will look like in our finished interview by using the “Preview” feature.

Clicking it will open a window with our stage loaded, and show the interface functioning as it will on an actual Network Canvas device.

| Key Concept: Preview Mode                          |
| :----------------------------------------------------------- |
| You can choose between different device presets, to mimic the look of a specific piece of hardware. For example you can emulate the screen size of an iPad, or a widescreen laptop.<br/><br/>You can scale the preview window so that you can fit it best with your workspace.<br/><br/>You can enter data in preview mode - for example creating nodes - but the data does not persist after you close the window. More on this later. |
{: .key-concept }

Click the pink “Preview” button in the bottom left hand corner of the stage editor, and the preview window will open.

{% include nc-image src="assets/img/architect-guide/10.png" %}

We can then click “continue” on the stage editor to return to our timeline view, but now with our new stage visible.

{% include nc-image src="assets/img/architect-guide/11.png" %}

## Creating a Name Generator

Next we will create a name generator. Once again, click the “add new stage” button, but this time select the “**Name Generator (using forms)”** interface.

As before, we will enter a stage name (“NameGen (People)”).

### Create a new node type

Before we can continue, we must tell Architect which type of node this interface will create. Since this is our first name generator, we have no node types defined yet. Click the “Create New Node Type” button to begin the process of creating one.

| Key Concept: Node and Edge "Types"                          |
| :----------------------------------------------------------- |
| Part of the ontological flexibility of the Network Canvas suite is the ability to model unlimited numbers of node and edge types.<br/><br/>The most frequently used example from personal networks research would be a social network made up of "people" node types, and edge types based on relationships of some kind or another (typically "friendship"). We would therefore create a node of type "Person", and an edge of type "Friendship" within Architect. |
{: .key-concept }

Our name generator will ask about people, so we will name our node type “People”. We can select a color to differentiate this node type from others, though in this case we will leave the default coral color selected.

Finally we will select the person icon to use for this node type. This icon is shown in Network Canvas wherever the participant has the opportunity to create a new node of this type. In the future, other icons will be added to Architect.

{% include nc-image src="assets/img/architect-guide/12.png" %}

Click “continue” to create the node type, and return to the name generator edit screen.

### Create the name generator form

Next we will create a form that will be shown when the participant creates a node on this name generator. Enter the title “Add a person” and then create new form fields (and associated variables) using the process you learned when creating the Ego Form above. Refer back to that section if you are unsure.

Create the following fields, with appropriate input controls, question prompts and validation rules:

* name
* age
* race

{% include nc-image src="assets/img/architect-guide/13.png" %}

### Create prompts

Next we must provide some questions to prompt the participant into adding alters within the interview.

| Key Concept: Prompts                          |
| :----------------------------------------------------------- |
| Most stages use the concept of "prompts" to allow you to define questions to put to the participant during the interview. You are free to explain the task to the participant in ways that are meaningful to your study.<br/><br/>You can have multiple prompts on a single stage, or a single prompt per stage - the choice is yours. You may wish to think about grouping prompts by theme, and then having one stage for each theme. For example, "Name Generator (family)" could contain prompts about family alters, and "Name Generator (colleagues)" could contain prompts about professional alters.<br/><br/>Prompts can contain formatting such as bold or italicized text to create emphasis and rhythm. To create this formatting, use markdown syntax. |
{: .key-concept }

Click the “create new” button in the prompt section, to open the new prompt edit form.

{% include nc-image src="assets/img/architect-guide/14.png" %}

Our first prompt will ask the participant to name the closest friends. Enter the text “Who are your closest friends”, and click “Save and Continue”.

Repeat this process for the second prompt, this time using the text “Are there other important people in your life you have not listed yet?”.

You can optionally preview the interface at this point, checking that the prompts and the form look and function as you expected. When you are satisfied, click continue to add your stage.

{% include tip-info.md content="At any point during this tutorial, free free to click the “Save” button in the bottom bar when on the timeline view, or select “File -> Save” from the menu." %}

## Creating a Sociogram

| Key Concept: Features of the Sociogram                          |
| :----------------------------------------------------------- |
| The Sociogram is an interface designed to allow participants to interact with the alters produced within Name Generator stages in three principle ways.<br/><br/>(1) Layout, where the participant spatially arranges the nodes; (2) Edge creation, where the participant can create alter-alter ties; (3) Variable toggling, where the participant can nominate alters has having a given boolean attribute. |
{: .key-concept }

By now you should have a feel for the process of configuring a stage within Architect. We will continue by adding a Sociogram to our interview, which builds on many of the concepts we have already covered.

From the timeline overview, click the “Add New Stage” button, and select the Sociogram interface.

{% include nc-image src="assets/img/architect-guide/15.png" %}

Here, we once again enter a stage name - "Sociogram (Person)", and select a node type ("People"). Notice that node types we created previously are available when we come to configure new stages.

{% include nc-image src="assets/img/architect-guide/16.png" %}

The sociogram interface has some unique configuration options. One of which is the “Background” section, which allows you to choose what is shown behind the nodes and edges. You can choose between concentric circles (one or more), or a background image that you provide.

For our scenario, we will select “Circles” and enter “1” as the number of circles to use.

{% include tip-info.md content="You should think carefully about how the choices you make regarding the background will impact the way your participants position their nodes." %}

Next, we will create some prompts to frame the task. Prompts on the Sociogram are more complex than the prompts we worked with on the Name Generator interface. Under the prompts section, click the “Create New” button.

{% include nc-image src="assets/img/architect-guide/17.png" %}

As with other prompts, we need to enter some text which will be shown to the participant. For this task, we want the participant to position the alters according to if they know each other. Enter the text “Place these individuals on the screen. Place them closer to each other if they are friends, farther if they do not know each other”.

### Layout Data

Next we come to the layout section of the prompt, which allows you to configure how the position of the nodes on the screen is stored in a variable. As with other places where we can either create or select a variable, we can type into the box to create a new variable, or click to select existing variables from the drop down list.

{% include nc-image src="assets/img/architect-guide/18.png" %}

In this case, since we have no existing layout variables, we will create a new one called “AlterLayout” by typing it into the box and pressing enter.

Asking the participant to position the nodes is the only task for this prompt, so we click the “Save and Continue” button to return to the stage edit screen.

### Creating edges

Our next prompt will allow users to create an edge between nodes. Click on “Create New” in the prompts section, and enter the prompt text “Now, please draw ties in between the individuals who are friends with each other”. Select the AlterLayout layout variable we created in the previous prompt.

To enable edge creation on a Sociogram prompt, we enable the “create edges by tapping on a node” option, in the “Edge Display and Creation” section.

{% include nc-image src="assets/img/architect-guide/19.png" %}

Next, we must define an edge type that this prompt will create. This process works very similarly to creating a node type (described on the name generator creation step), except we are able to create the type right from within our prompt.

To do this, type “AlterFriendEdge” into the box that says “Create edges of the following type”, and press enter to create this edge type.

| Key Concept: Creating and displaying edges                          |
| :----------------------------------------------------------- |
| The sociogram is the primary location within the interview where edges are created.<br/><br/>A sociogram prompt can only create a single edge type at a time, but note that it can display several.<br/><br/>In the scenario where multiple edge types are selected for display, creating a new edge that would cover an existing one works simply - the existing edge is visually replaced with the new edge type. Both edges are still stored in the interview network. Removing this new edge will revert the visual display to the previously visible edge type (only one edge type can be created or removed on a prompt).<br/><br/>You may consider using this feature to progressively build up a network, by allowing the participant to use the visual "scaffolding" of existing edges to quickly identify where to create new ones. |
{: .key-concept }

### Toggling a variable

Our third sociogram prompt will allow the participant to toggle a boolean variable to “true” or “false” by tapping a note.

Once again, create a new prompt, with the text “Next, please highlight any individuals who are either current or past sex partners”. Re-use the layout variable (“AlterLayout”) we created on the first prompt.

We do not want to enable edge creation on this prompt, as it would disable the highlighting function (the two modes are mutually exclusive). However, we can still display edges in order to help the participant locate nodes.

To do this, select “AlterFriendEdge” under “Display edges of the following type(s)”.

{% include nc-image src="assets/img/architect-guide/20.png" %}

Configuring the sociogram prompt to enable variable toggling involves two steps: (1) toggle
“Enable variable toggling by tapping a node” to the “on” position, and (2) create (or select) a boolean variable to be assigned in the box that appears below.

In this case of this prompt, using the techniques we have already covered, create a variable called “AlterSexPartner” and press “Save and Continue”. We have now finished configuring the sociogram.

| Key Concept: Preview mode for sociogram                          |
| :----------------------------------------------------------- |
| When previewing a stage using an interface type that does not create nodes, you may notice that no nodes are available to test the stage's functionality.<br/><br/>To address this, the preview mode allows you to create nodes from any earlier stages in your interview that are capable of this (primarily name generators or roster interfaces).<br/><br/>Simply navigate to a stage that creates nodes from within preview mode, create some nodes suitable for your sociogram stage, and then navigate to the sociogram stage - your nodes will appear, and you will be able to test edge creation, variable toggling, and positioning. |
{: .key-concept }

## Creating an Ordinal Bin

We now wish to create an Ordinal Bin interface so that we can quickly and efficiently ask our participant about the support given to them by each alter. From the timeline overview, add a new stage using the Ordinal Bin interface.

As with previous interfaces, begin with naming the stage (“AlterSupport”), and selecting our node type (“People”).

{% include nc-image src="assets/img/architect-guide/21.png" %}

Most of the configuration for this interface happens within the prompt. Create a new prompt, and enter the text “How much support does each person give you?”.

Next, we need to create an ordinal variable. This is fundamentally the same process as we carried out when we configuring the race variable in our ego form (revisit the “Creating an Ordinal Variable” section if you need to re-familiarize yourself with this).

Create a variable named “AlterSupport” with the following possible options:

<table>
  <tr>
   <td><strong>Label</strong>
   </td>
   <td><strong>Value</strong>
   </td>
  </tr>
  <tr>
   <td>A Lot of Support
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td>Some Support
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>A Little Support
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>No Support
   </td>
   <td>0
   </td>
  </tr>
</table>

{% include nc-image src="assets/img/architect-guide/22.png" %}

| Key Concept: "Bins" and "Buckets"                          |
| :----------------------------------------------------------- |
| By convention, the Network Canvas software uses two terms for the containers that nodes are dragged between on the Ordinal Bin, Categorical Bin, and Sociogram interfaces.<br/><br/>Buckets are where nodes are found initially, before they have been placed, or dragged.<br/><br/>Bins are where nodes are placed are dragged to. This is where nodes end up.<br/><br/>Both bins and buckets can have the sort order of the nodes within them defined. You can use this to (for example) make the bucket show nodes with a certain attribute, such as closeness, first. This may help with a task such as positioning nodes on a sociogram. |
{: .key-concept }

In the case of our prompt, we will use the default node bin and bucket sort options. Click “Save and Continue” to finish editing this prompt, and then click “Continue” to return to the timeline view.

## Creating a Categorical Bin

You should now be able to create a categorical bin interface using everything that you have learned so far. Add a new stage using the Categorical Bin interface, with the following characteristics:

* Named “Sex Alter Categorical Bin”, and operating on the “People” node type.
* Using a categorical variable called “sex_alter_category” with the following options:
  * Serious Relationship
  * One Night Stand
  * Friend with Benefits
  * Something Else
  * Not a sex partner
* With the prompt text “Please indicate which category best describes your sexual relationship with these people”

## Creating a Name Generator using "quick add" mode

To finish the protocol, add a new Name Generator stage with the following characteristics:

* Uses the “Name Generator (using quick add)” interface
* Creates a new node type called “Restaurants”, that uses a blue node color and the “place” icon.
* Assigns a variable called “restaurant_name” as the Quick Add Variable
* Has a single prompt, with text that reads “What are the names of some of your favorite fast food restaurants?”

## Finishing off your protocol file
Now with each of these stages in the protocol, make sure to save your file. The file name of the protocol set in Architect will be the same name used in both the Network Canvas app and the Server. There are numerous ways to transition from building the protocol within the Architect to deployment.

- Within the Network Canvas app, import the protocol file directly from a file location your local computer.
- Host the protocol file on a web server and then within the Network Canvas app, import the protocol file from web URL.
- Use Network Canvas Server to manage the workflow. Once the protocol is loaded into Server it can be deployed to numerous field devices and then receive data from these devices for collation and export.

In the next section (Server and Network Canvas Workflows) we will show you how to use Server to load a protocol file onto multiple devices and then receive the data from those devices.
