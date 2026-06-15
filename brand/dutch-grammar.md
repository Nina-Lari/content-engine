# Dutch Grammar Correctness Reference

The first half of the Dutch checker. This file answers one question: **is the Dutch sentence grammatically correct?** The companion file `dutch-level-guide.md` answers the second question: is it at the right difficulty level for our audience?

Use this when reviewing the `nl` strings inside `remotion/props/<week>/<slug>.json` and any Dutch that appears in a runbook. Check every Dutch line against the rules below before a post is approved. A line can be perfectly A1-easy and still be wrong (a missing `-t`, a verb in the wrong slot), so correctness and level are separate passes.

> Scope: this is a working reference for everyday A1/A2 Dutch, not a full grammar. It covers the structures our posts actually use: short main clauses, polite requests, questions, and the occasional `omdat`/`dat` clause. When a sentence needs grammar past this file, that is itself a level flag (see `dutch-level-guide.md`).

---

## 1. Word order (the part that breaks most)

Dutch word order is rigid. English word order is flexible. Most wrong-sounding Dutch from an English speaker (or an AI translating from English) is a word-order error, not a vocabulary error.

### 1.1 Main clause: the V2 rule

The conjugated (finite) verb sits in **position 2**, where "position" means the second *constituent*, not the second word.

- `Ik` **`leer`** `Nederlands.` (I learn Dutch.)
- `Mijn vriendin` **`woont`** `in Utrecht.` (My girlfriend lives in Utrecht.)

### 1.2 Inversion: when something other than the subject comes first

If you front a time, place, or any other element, the verb stays in position 2, which pushes the subject to position 3 (right after the verb).

- `Vandaag` **`leer`** `ik Nederlands.` (Today I learn Dutch.) — NOT `Vandaag ik leer...`
- `In Amsterdam` **`woont`** `hij.` (He lives in Amsterdam.)

This is the single most common mistake to catch: an English-shaped sentence keeps the subject first after a fronted phrase. Dutch does not.

### 1.3 The middle field: Time, Manner, Place

Adverbials in the middle of a clause order as **Time then Manner then Place**.

- `Ik ga` **`morgen`** (time) **`met de trein`** (manner) **`naar Amsterdam.`** (place)

### 1.4 Subordinate clauses: verb to the end

Clauses opened by `omdat` (because), `dat` (that), `als` (if), `terwijl` (while), `want` is NOT one of these (see note) send the conjugated verb to the **end**.

- `Ik leer Nederlands, omdat ik in Amsterdam` **`woon`**`.`
- `Hij zegt dat hij morgen` **`komt`**`.`

Note: `want` (for/because) behaves like a main-clause connector and keeps normal V2 order after it: `Ik leer Nederlands, want ik` **`woon`** `hier.` Mixing up `want` and `omdat` word order is a classic error.

### 1.5 Two verbs: the second verb goes to the end

With a modal (`kunnen`, `willen`, `mogen`, `moeten`) or the perfect tense, the finite verb takes position 2 and the infinitive or past participle goes to the **very end**.

- `Ik` **`kan`** `Nederlands` **`spreken`**`.` (I can speak Dutch.)
- `Wij` **`hebben`** `gisteren een film` **`gezien`**`.` (We saw a movie yesterday.)

In a subordinate clause both verbs cluster at the end: `...omdat ik Nederlands kan spreken.`

### 1.6 Separable verbs

Separable verbs (`opbellen`, `meekomen`, `aankomen`) split in a main clause: the prefix goes to the end.

- `Ik` **`bel`** `je morgen` **`op`**`.` (I will call you tomorrow.)
- But they stay joined as an infinitive at the end: `Ik wil je morgen` **`opbellen`**`.`

### 1.7 Questions

- **Yes/no question:** verb first. `Spreekt u Engels?` `Mag ik dit proberen?`
- **Question word first:** `wat`, `waar`, `hoe`, `wanneer`, `waarom`, then the verb in position 2. `Hoe` **`zegt`** `u dat?` `Waar` **`woon`** `je?`

### 1.8 Imperative

Verb (stem) first: `Kom binnen.` `Zeg het maar.` `Probeer het in het Nederlands.`

---

## 2. Verbs

### 2.1 Present tense (the workhorse for A1)

Stem = infinitive minus `-en` (with spelling fixes, see 2.4).

| Subject | Ending | Example (`werken`, stem `werk`) |
| --- | --- | --- |
| ik | stem | ik werk |
| jij / je | stem + t | jij werkt |
| u | stem + t | u werkt |
| hij / zij / het | stem + t | hij werkt |
| wij / jullie / zij (plural) | infinitive (-en) | wij werken |

**The inversion `-t` drop.** When `jij`/`je` comes *after* the verb (questions, inversion), the `-t` disappears.

- `Jij werkt morgen.` becomes `Werk jij morgen?` (no `-t`)
- `Jij gaat naar huis.` becomes `Ga jij naar huis?`

This only happens with `jij`/`je`. `u` and `hij` keep the `-t`: `Werkt u morgen?` `Komt hij?`

### 2.2 Irregular present (memorize, they are everywhere)

- `zijn` (to be): ik ben, jij bent, u bent, hij is, wij/jullie/zij zijn
- `hebben` (to have): ik heb, jij hebt, u hebt/heeft, hij heeft, wij/jullie/zij hebben
- `kunnen`: ik kan, jij kunt/kan, hij kan, wij kunnen
- `mogen`: ik mag, jij mag, hij mag, wij mogen
- `willen`: ik wil, jij wilt/wil, hij wil, wij willen
- `gaan`: ik ga, jij gaat, hij gaat, wij gaan

### 2.3 Perfect tense (the main past tense for spoken A2)

Spoken Dutch prefers the perfect (`Ik heb gewerkt`) over the simple past for most everyday talk. Structure: **`hebben`/`zijn` in position 2 + past participle at the end.**

Past participle of a regular verb: `ge` + stem + `t` or `d`.

- The **`'t kofschip`** rule decides `t` vs `d`: if the stem ends in one of `t k f s ch p` (the consonants in `'t kofschip`), the participle ends in `-t`. Otherwise `-d`.
  - `werken` to `gewerkt` (stem ends in `k`)
  - `maken` to `gemaakt` (`k`)
  - `horen` to `gehoord` (`r`, not in kofschip, so `-d`)
  - `wonen` to `gewoond` (`n`, so `-d`)
- Strong verbs change the vowel and end in `-en`: `zien` to `gezien`, `lopen` to `gelopen`, `spreken` to `gesproken`. These are memorized, not derived.
- No `ge-` prefix on verbs starting with `be-`, `ge-`, `er-`, `her-`, `ont-`, `ver-`: `betalen` to `betaald`, `beginnen` to `begonnen`, `verkopen` to `verkocht`.

**`hebben` or `zijn`?** Most verbs take `hebben`. Use `zijn` for a change of state or directional motion: `Ik ben naar huis gegaan.` `Hij is gevallen.` `Zij is gekomen.`

### 2.4 Spelling rules that change the stem

These trip up both learners and AI. Apply when forming the stem or adding `-t`.

- **Long vowel stays long.** `wonen` to `ik woon` (double the vowel to keep it long in a closed syllable). `maken` to `ik maak`.
- **No double consonant at the end of a word.** `bellen` to `ik bel` (not `bell`). `zwemmen` to `ik zwem`.
- **`v` to `f`, `z` to `s` at the end.** `leven` to `ik leef`. `reizen` to `ik reis`. `geloven` to `ik geloof`.
- **`d`/`t` confusion.** `worden` to `ik word`, `hij wordt` (stem `word` + `t`). `vinden` to `ik vind`, `hij vindt`. The sound is the same, the spelling is not.

---

## 3. Articles and gender (de / het)

- Two definite articles: **`de`** (common gender, roughly two thirds of nouns) and **`het`** (neuter). `de man`, `de vrouw`, `het huis`, `het kind`.
- All plurals take `de`: `de huizen`, `de kinderen`.
- Indefinite is **`een`** for everything: `een man`, `een huis`.
- There is no reliable rule for de vs het. It is memorized per noun. Diminutives are always `het`: `het meisje`, `het kopje`.

When checking a phrase, the most common article error is a `het`-word given `de` (or the matching adjective form being wrong, see section 4).

---

## 4. Adjective inflection (the `-e` rule)

An attributive adjective (one sitting before a noun) takes `-e` in almost every case. The **one exception**: a neuter (`het`) noun that is singular **and** indefinite takes the bare adjective.

| | with `de`-word | with `het`-word |
| --- | --- | --- |
| definite (de/het ...) | de groot**e** man | het groot**e** huis |
| indefinite singular (een ...) | een groot**e** man | een **groot** huis (no `-e`) |
| plural | groot**e** mannen | groot**e** huizen |

So: `een groot huis` (correct), `een grote huis` (wrong), `het grote huis` (correct). A predicate adjective (after the verb) never inflects: `Het huis is groot.`

---

## 5. Negation: niet vs geen

- **`geen`** negates an indefinite noun, meaning a noun with `een` or with no article: `Ik heb geen tijd.` `Dat is geen probleem.` `Ik spreek geen Frans.`
- **`niet`** negates everything else (verbs, adjectives, definite nouns, the whole clause): `Ik begrijp het niet.` `Het is niet moeilijk.` `Ik woon niet in Amsterdam.`
- Placement of `niet`: near the end of the clause, but **before** the element it negates (a preposition phrase, an adjective, the final verb cluster): `Ik kan dat niet zeggen.` `Nederlands is niet moeilijk.`

Quick test: if you could say "no / not a / not any" in English, it is probably `geen`. Otherwise `niet`.

---

## 6. Plurals and diminutives

- **Plurals:** most nouns take `-en` (`huis` to `huizen`, `boek` to `boeken`). A set take `-s`, mainly words ending in an unstressed `-el/-em/-en/-er`, a vowel, or `-je`: `tafel` to `tafels`, `meisje` to `meisjes`, `foto` to `foto's` (apostrophe before `-s` after a single long vowel).
- **Diminutives:** add `-je` (with variants `-tje`, `-pje`, `-etje` by sound): `huis` to `huisje`, `man` to `mannetje`, `boom` to `boompje`. Diminutives are always `het`-words and always pluralize with `-s`.

---

## 7. Pronouns and register (matters for our brand)

Our posts switch between **formal `u`** (strangers, shop staff, officials) and **informal `je`/`jij`** (friends, peers). Pick one register per sentence and keep the verb agreement and possessives consistent.

| | informal | formal |
| --- | --- | --- |
| subject | jij / je | u |
| object | jou / je | u |
| possessive | jouw / je | uw |
| verb agreement | stem + t (drops in inversion) | stem + t (never drops) |

- Consistent: `Mag ik het in het Nederlands proberen?` (neutral `ik`), `U mag gewoon Nederlands tegen me praten.` (formal, `u` + `praten`).
- Inconsistent (catch this): `Kunt u jouw naam zeggen?` mixes formal `u` with informal `jouw`. Use `uw`.

Rule of thumb for our content: requests to strangers and service staff use `u`. Lines aimed at the viewer's friend or study partner use `je`. Whatever the runbook's `when` field implies, the register must match it.

---

## 8. Common errors to catch (the checklist)

Run each Dutch line through these. Any "yes" is a fix.

1. **Subject before verb after a fronted phrase?** (`Vandaag ik...` instead of `Vandaag leer ik...`)
2. **Missing `-t`** on `jij`/`u`/`hij` present tense? Or a stray `-t` on `jij` in a question?
3. **Verb not at the end** of an `omdat`/`dat`/`als` clause?
4. **Second verb (infinitive/participle) not at the end** with a modal or perfect tense?
5. **Wrong auxiliary**: `hebben` where motion/change-of-state needs `zijn`?
6. **`'t kofschip` slip**: `gewerkt` vs `gewerkd`, `gehoord` vs `gehoort`?
7. **Adjective `-e`** wrong: `een grote huis` (should be `een groot huis`)?
8. **niet/geen** swapped?
9. **Register mismatch**: `u` mixed with `je`/`jouw` in the same line?
10. **Spelling-rule slip**: `ik woon` vs `ik won`, `hij wordt` vs `hij word`, double consonant at end?

When in doubt about a single noun's gender or a strong verb's participle, verify against a dictionary (e.g. `vandale.nl`, `woordenlijst.org`) rather than guessing. Getting one wrong in a rendered slide is the kind of error native viewers spot instantly.

---

## Sources

- Dutch grammar overview and conjugation tables: [Wikipedia: Dutch grammar](https://en.wikipedia.org/wiki/Dutch_grammar)
- Word order, V2, inversion, Time-Manner-Place, subordinate clauses: [QuizDutch: Dutch Word Order](https://quizdutch.com/dutch-word-order.html)
- Present tense and the inversion `-t` drop: [The Dutch Learner's Grammar (Sheffield)](http://dutchgrammar.group.shef.ac.uk/topic/present-tense/), [Preply: Dutch present tense](https://preply.com/en/blog/dutch-present-tense/)
- The `'t kofschip` / d-t rules: [Wikipedia: T-rules](https://en.wikipedia.org/wiki/T-rules)
- niet vs geen placement: [Dutch negation overview](https://www.aidenelias.com/dutch-negation.html)
