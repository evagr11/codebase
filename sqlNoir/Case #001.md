# Case #001: The Vanishing Briefcase

Set in the gritty 1980s, a valuable briefcase has disappeared from the ((Blue Note Lounge)). A witness reported that a man in a trench coat was seen fleeing the scene. Investigate the crime scene, review the list of suspects, and examine interview transcripts to reveal the culprit.

## Location = Blue Note Lounge

```bash
SELECT * FROM crime_scene
WHERE location = 'Blue Note Lounge'
```

| id | date | type | location | description |
|:--:|:----:|:----:|:--------:|:-----------:|
|76	| 19851120|theft	|Blue Note Lounge|A briefcase containing sensitive documents vanished. A witness reported a man in a ((trench coat)) with a ((scar on his left cheek)) fleeing the scene.|