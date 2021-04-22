---
layout: interface-documentation
grand_parent: Reference
parent: Interface Documentation
image: /assets/uploads/stage-tiestrengthcensus.png
title: Tie-Strength Census
type: Edge Generator/Edge Interpreter
creates: Edges with Ordinal weight
uses_prompts: true
good:
  - Use this interface in scenarios where you are already using a Dyad Census
    and wish to also collect data about the strength of a tie.
bad:
  - Avoid using this interface in an interview that also uses the Sociogram to
    create edges.
---
The Tie-Strength Census interface is similar to the Dyad Census in terms of user experience, but has the additional benefit of assigning an ordinal variable value to each edge that is created.