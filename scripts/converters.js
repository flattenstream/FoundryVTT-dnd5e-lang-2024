import { mergeEffects } from "./converters/merge-effects.js";
import { advancementById } from "./converters/advancement-by-id.js";
import { journalPagesById } from "./converters/journalPagesById.js";
import { journalEntryFullById } from "./converters/journalEntryFullById.js";
import { actorFullById } from "./converters/actorFullById.js";

Hooks.on("init", () => {
  const babele = game?.babele;
  if (!babele?.registerConverters) return;

    babele.registerConverters({
        mergeEffects,
        advancementById,
        journalPagesById,
        journalEntryFullById,
        actorFullById
    });

    console.log("[Babele - dnd5e-ko-2024] Converters registered:", Object.keys(babele.converters ?? {}));
});