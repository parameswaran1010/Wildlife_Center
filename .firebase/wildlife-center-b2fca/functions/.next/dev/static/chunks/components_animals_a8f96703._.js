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
"[project]/components/animals/animal-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimalCard",
    ()=>AnimalCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animals$2f$favorite$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animals/favorite-button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function AnimalCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "6cc906fcbeeea30d4b8b30241a755efef2c790007bd5b7d812b5d0584f88b9ef") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6cc906fcbeeea30d4b8b30241a755efef2c790007bd5b7d812b5d0584f88b9ef";
    }
    const { animal } = t0;
    const t1 = `/animals/${animal.id}`;
    const t2 = `Photo of a ${animal.name}`;
    let t3;
    if ($[1] !== animal.imageUrl || $[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: animal.imageUrl,
            alt: t2,
            fill: true,
            className: "object-cover transition-transform duration-500 group-hover:scale-110",
            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }, void 0, false, {
            fileName: "[project]/components/animals/animal-card.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[1] = animal.imageUrl;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"
        }, void 0, false, {
            fileName: "[project]/components/animals/animal-card.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== animal.id) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-2 right-2 z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animals$2f$favorite$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FavoriteButton"], {
                animalId: animal.id
            }, void 0, false, {
                fileName: "[project]/components/animals/animal-card.tsx",
                lineNumber: 43,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/animals/animal-card.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[5] = animal.id;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== animal.name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold",
            children: animal.name
        }, void 0, false, {
            fileName: "[project]/components/animals/animal-card.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[7] = animal.name;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== animal.scientificName) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm italic opacity-90",
            children: animal.scientificName
        }, void 0, false, {
            fileName: "[project]/components/animals/animal-card.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[9] = animal.scientificName;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t6 || $[12] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-4 left-4 text-white",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/animals/animal-card.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== t3 || $[15] !== t5 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-48 w-full overflow-hidden",
            children: [
                t3,
                t4,
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/animals/animal-card.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[14] = t3;
        $[15] = t5;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== animal.shortDescription) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted-foreground line-clamp-3 mb-4 text-sm flex-grow",
            children: animal.shortDescription
        }, void 0, false, {
            fileName: "[project]/components/animals/animal-card.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, this);
        $[18] = animal.shortDescription;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center text-forest-green font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform",
            children: [
                "Read More ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                    className: "w-4 h-4 ml-1"
                }, void 0, false, {
                    fileName: "[project]/components/animals/animal-card.tsx",
                    lineNumber: 94,
                    columnNumber: 149
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/animals/animal-card.tsx",
            lineNumber: 94,
            columnNumber: 11
        }, this);
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 flex flex-col flex-grow",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/animals/animal-card.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t12 || $[24] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-card rounded-xl overflow-hidden border shadow-sm card-transition h-full flex flex-col relative",
            children: [
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/animals/animal-card.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t9;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t1 || $[27] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t1,
            className: "group block",
            children: t13
        }, void 0, false, {
            fileName: "[project]/components/animals/animal-card.tsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[26] = t1;
        $[27] = t13;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    return t14;
}
_c = AnimalCard;
var _c;
__turbopack_context__.k.register(_c, "AnimalCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_animals_a8f96703._.js.map