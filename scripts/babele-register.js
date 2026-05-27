/**
 * Babele registration for this translation module.
 * 
 */
Hooks.on("init", () => {
  const babele = game?.babele;
  if (!babele) return;

  const current = game.i18n?.lang ?? "ko";
  const base = current.split("-")[0];
  const langs = Array.from(new Set([current, base]));

  for (const lang of langs) {
    try {
      babele.register({
          module: "dnd5e-ko-2024",
          lang,
          dir: "compendium",
          compendium: {
              "dnd5e.content24": {
                  label: "규칙",
                  path: "dnd5e-ko-2024.json",
                  converter: "journalEntryFullById"
              },
              "dnd5e.origins24": {
                  label: "출신",
                  path: "dnd5e.origins24.json"
              },
              "dnd5e.classes24": {
                  label: "클래스",
                  path: "dnd5e.classes24.json"
              },
              "dnd5e.feats24": {
                  label: "재주",
                  path: "dnd5e.feats24.json"
              },
              "dnd5e.spells24": {
                  label: "주문",
                  path: "dnd5e.spells24.json"
              },
              "dnd5e.equipment24": {
                  label: "장비",
                  path: "dnd5e.equipment24.json"
              },
              "dnd5e.tables24": {
                  label: "굴림표",
                  path: "dnd5e.tables24.json"
                  // aquí normalmente NO hace falta mapping
              },
              "dnd5e.monsterfeatures24": {
                  label: "몬스터",
                  path: "dnd5e.monsterfeatures24.json"
              },
              "dnd5e.actors24": {
                  label: "액터",
                  path: "dnd5e.actors24.json",
                  converter: "actorFullById"
              }
          }
      });
        console.log(`[Babele - dnd5e-ko-2024] Registered for lang="${lang}" (dir=compendium)`);
    } catch (err) {
        console.error(`[Babele - dnd5e-ko-2024] Failed registering for lang="${lang}"`, err);
    }
  }
});
