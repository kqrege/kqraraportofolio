# Portfolio systems roadmap

This is not public site copy. It is a private backlog for building real work to add later.

The portfolio should grow over time. Do not wait until there are ten projects. A launch with 3–4 strong finished systems is enough.

## Good first systems

### 1. Inventory + equipment system

Potential proof:

- inventory logic
- stacking
- hotbar/equipment
- saving
- server-side validation
- item states
- clean client/server behavior

Record it working in Studio. If a UI is used, clearly state whether that UI was provided or built only as a simple test interface.

### 2. Round + matchmaking system

Potential proof:

- queues
- round state machine
- player assignment
- spawn/teleport flow
- reset/cleanup
- reconnect/edge-case handling where relevant

### 3. Shop + monetization system

Potential proof:

- gamepasses
- developer products
- receipt handling
- ownership checks
- currency flow
- server-side validation

### 4. Data/profile system

Good follow-up if there is a clean way to record the behavior without exposing code.

Potential proof:

- save/load
- autosave
- retry/failure handling
- migrations/versioning
- session safety

## Later ideas

- admin system
- anti-exploit system
- NPC/pathfinding system
- procedural generation
- optimization case
- UI logic-heavy feature using provided UI
- quest system
- interaction framework
- notification/menu wiring

## Recording rule

For every system:

1. finish it first
2. record a clear Studio demo
3. keep the recording short enough to understand
4. do not rely on flashy UI to sell scripting work
5. collect a poster frame
6. write `My work`
7. list `Provided assets` when needed

The video proves the system works. The text proves what kq actually did.
