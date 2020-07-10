# Toolkip: Models

The model library in `toolkip` is designed to manage state effectively in an immutable and bindable way. When instantiating a model you will be able to define a set of values that the particular library can contain

## _Model
This is the core set of shared functionality between models. All models contain their data within an `_innerModel` property, all models allow for event listening at any of the global, model, or property levels, and all models keep track of their internal history so that undoing or redoing is atraightforward.

This layer also introduces the expected functions that all other models will enable: the getters and setters 

### Handling imports & exports
Models are specifically designed to aid in client-server translation of objects. As such, a model may specify a set of transformations that should be applied to data in order to get it server-ready, or to import. 

### Passing models around
Everything inside of a model should also be a model. 

Example:

|-------------------| 
| _ImmutableModel   |
| ----------------- |
| - _innerModel: ImmutableModel<T>
| ----------------- |
| + get             |
| + set             |
|-------------------|


--------
Model<T>
--------
- _innerModel: ImmutableModel<T>
- _history: HistoryChain<T>
- _event: ModelEvent<T>
--------
+ addEventListeners: () => void
+ import(data: T): void;
+ export(): T;