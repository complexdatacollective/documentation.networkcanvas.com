---
title: Per Alter Edge Form


image: /assets/img/interface-documentation/per-edge-form/example.png
type: Edge Interpreter
creates: Attribute data on a single edge type
uses_prompts: No
bad:
  - Avoid overloading this Interface with too many fields and/or text-heavy prompts.
  - Do not use this Interface in place of a dyad census as participants will only be asked to provide data on existing edges between alters rather than all possible alter combinations. If your study requires a [Dyad Census](../dyad-census) you can add and configure that Interface in Architect. 
good:
  - Use this Interface as a simple way to systematically collect data on edges.
  - Use the introductory panel to orient participants to the tasks within the form they will complete for each edge.
  - Consider including form fields to capture temporal data which utilize [input controls](../../key-concepts/input-controls) like the [DatePicker](../../key-concepts/input-controls/#date-picker).
---

The Per Alter Edge Form is an _edge interpreter_ interface that collects attribute data on the edges, or relationships, between nodes in a participant's network. When using the Per Alter Edge Form, participants review an introductory screen that describes the tasks on the stage and then complete a [form](../_key-concepts/forms.md) for each edge they previously defined between pairs of alters within their network. These forms are customizable and can include one or multiple fields to collect specific edge attribute data.

## Configuring Per Alter Edge Form

A single edge type is selectable per screen. This screen supports [filtering](../_key-concepts/network-filtering.md) for edges that match the
specified type.

![Image](/assets/img/interface-documentation/per-edge-form/architect-edge-type.png)

The introduction screen is shown before any matching edges and can be used to introduce the task.

![Image](/assets/img/interface-documentation/per-edge-form/architect-intro.png)

Each edge will be assigned [variables](../_reference/variable-types.md) using a configurable [form](../_key-concepts/forms.md).

![Form fields can be re-ordered by dragging, and deleted by clicking the right hand 'x'](/assets/img/interface-documentation/per-edge-form/architect-form.png){:standalone}
