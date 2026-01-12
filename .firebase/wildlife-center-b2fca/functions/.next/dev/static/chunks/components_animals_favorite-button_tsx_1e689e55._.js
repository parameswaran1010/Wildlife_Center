(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/animals/favorite-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FavoriteButton",
    ()=>FavoriteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function FavoriteButton(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "1206aded4ee407992fa6c69980ad46cfd691c5fdd2f6958623757ce0fcb0a7d9") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1206aded4ee407992fa6c69980ad46cfd691c5fdd2f6958623757ce0fcb0a7d9";
    }
    const { animalId, className, iconSize: t1 } = t0;
    const iconSize = t1 === undefined ? 24 : t1;
    const [isFavorite, setIsFavorite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    let t3;
    if ($[1] !== animalId) {
        t2 = ({
            "FavoriteButton[useEffect()]": ()=>{
                setMounted(true);
                const favorites = JSON.parse(localStorage.getItem("wildlife_favorites") || "[]");
                setIsFavorite(favorites.includes(animalId));
            }
        })["FavoriteButton[useEffect()]"];
        t3 = [
            animalId
        ];
        $[1] = animalId;
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] !== animalId) {
        t4 = ({
            "FavoriteButton[toggleFavorite]": (e)=>{
                e.preventDefault();
                e.stopPropagation();
                const favorites_0 = JSON.parse(localStorage.getItem("wildlife_favorites") || "[]");
                let newFavorites;
                if (favorites_0.includes(animalId)) {
                    newFavorites = favorites_0.filter({
                        "FavoriteButton[toggleFavorite > favorites_0.filter()]": (id)=>id !== animalId
                    }["FavoriteButton[toggleFavorite > favorites_0.filter()]"]);
                    setIsFavorite(false);
                } else {
                    newFavorites = [
                        ...favorites_0,
                        animalId
                    ];
                    setIsFavorite(true);
                }
                localStorage.setItem("wildlife_favorites", JSON.stringify(newFavorites));
            }
        })["FavoriteButton[toggleFavorite]"];
        $[4] = animalId;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const toggleFavorite = t4;
    if (!mounted) {
        return null;
    }
    const t5 = isFavorite ? "text-red-500 bg-red-50 dark:bg-red-900/20" : "text-muted-foreground bg-black/5 dark:bg-white/10 hover:text-red-500";
    let t6;
    if ($[6] !== className || $[7] !== t5) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-forest-green", t5, className);
        $[6] = className;
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = isFavorite ? "Remove from favorites" : "Save to favorites";
    const t8 = isFavorite ? "Remove from favorites" : "Save to favorites";
    const t9 = isFavorite && "fill-current";
    let t10;
    if ($[9] !== t9) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("transition-colors", t9);
        $[9] = t9;
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] !== iconSize || $[12] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            size: iconSize,
            className: t10
        }, void 0, false, {
            fileName: "[project]/components/animals/favorite-button.tsx",
            lineNumber: 99,
            columnNumber: 11
        }, this);
        $[11] = iconSize;
        $[12] = t10;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] !== t11 || $[15] !== t6 || $[16] !== t7 || $[17] !== t8 || $[18] !== toggleFavorite) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleFavorite,
            className: t6,
            "aria-label": t7,
            title: t8,
            children: t11
        }, void 0, false, {
            fileName: "[project]/components/animals/favorite-button.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[14] = t11;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
        $[18] = toggleFavorite;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    return t12;
}
_s(FavoriteButton, "OydUBptVJCQXxRuGitYSRAKOVG0=");
_c = FavoriteButton;
var _c;
__turbopack_context__.k.register(_c, "FavoriteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_animals_favorite-button_tsx_1e689e55._.js.map