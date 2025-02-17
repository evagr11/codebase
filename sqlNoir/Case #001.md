# Case #001: The Vanishing Briefcase

Set in the gritty 1980s, a valuable briefcase has disappeared from the ((Blue Note Lounge)). A witness reported that a man in a trench coat was seen fleeing the scene. Investigate the crime scene, review the list of suspects, and examine interview transcripts to reveal the culprit.

## Location = Blue Note Lounge

```bash
SELECT * FROM crime_scene
WHERE location = 'Blue Note Lounge'
```

| id | date | type | location | description |
|:--:|:----:|:----:|:--------:|:-----------:|
|76	|19851120|theft|Blue Note Lounge|A briefcase containing sensitive documents vanished. A witness reported a man in a ((trench coat)) with a ((scar on his left cheek)) fleeing the scene.|

## Attire = trench coat && Scar = left cheek
```bash
SELECT * FROM suspects
WHERE attire = 'trench coat' 
AND scar = 'left cheek'
```

| id | name | attire | scar |
|:--:|:----:|:----:|:--------:|
|3	|Frankie Lombardi|trench coat|left cheek|
|183|Vincent Malone|trench coat|left cheek|

## suspect_id = confesion
```bash
SELECT * FROM interviews
WHERE suspect_id = '3'
```
| suspect_id | transcript |
|:----------:|:----------:|
|3	|NULL|

```bash
SELECT * FROM interviews
WHERE suspect_id = '183'
```
| suspect_id | transcript |
|:----------:|:----------:|
|183|I wasn’t going to steal it, but I did.|

## Solución
```bash
SELECT * FROM suspects
WHERE id = '183'
```
| id | name | attire | scar |
|:--:|:----:|:----:|:--------:|
|183|Vincent Malone|trench coat|left cheek|