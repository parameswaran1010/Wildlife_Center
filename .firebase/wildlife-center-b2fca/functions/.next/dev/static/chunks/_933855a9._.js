(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/events.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EVENTS",
    ()=>EVENTS
]);
const EVENTS = [
    {
        id: "ev_001",
        title: "Dawn Chorus Walk",
        date: "2024-05-12",
        time: "05:30 AM",
        location: "Main Woodlands Entrance",
        description: "Experience the magic of the morning bird song with our expert ornithologists.",
        fullDescription: "Join us for an unforgettable early morning experience. The Dawn Chorus is one of nature's most uplifting events. Our guides will help you identify different bird songs and calls. Includes a hot breakfast at the lodge afterwards.",
        image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea218?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "ev_002",
        title: "Wildlife Photography Workshop",
        date: "2024-05-18",
        time: "10:00 AM",
        location: "Education Center",
        description: "Learn to capture the perfect shot without disturbing the animals.",
        fullDescription: "Perfect for beginners and enthusiasts alike. Professional wildlife photographer Sarah Jenkins will teach you techniques for lighting, composition, and ethical wildlife photography. Bring your own camera!",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "ev_003",
        title: "Bat Detection Night",
        date: "2024-05-25",
        time: "08:00 PM",
        location: "Wetlands Boardwalk",
        description: "Use ultrasonic detectors to track our nocturnal flying residents.",
        fullDescription: "As the sun sets, the bats come out to play. We'll be using heterodyne bat detectors to hear their echolocation calls. Wear warm clothes and good walking boots. Torches provided.",
        image: "https://images.unsplash.com/photo-1497206365907-f5e1f19b03f4?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "ev_004",
        title: "Hedgehog First Aid",
        date: "2024-06-02",
        time: "02:00 PM",
        location: "Animal Hospital",
        description: "Learn how to help injured hedgehogs in your garden.",
        fullDescription: "Hedgehogs are in decline, but you can help. This workshop covers basic first aid, how to spot a sick hedgehog, and how to make your garden hedgehog-friendly. Includes a tour of our rehabilitation unit.",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/events/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$event$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/event-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/events.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function EventDetailsPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(70);
    if ($[0] !== "89a320ec2779996b5c62449aa7bce7481a7476d12716bb44238f76412f42cdf7") {
        for(let $i = 0; $i < 70; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "89a320ec2779996b5c62449aa7bce7481a7476d12716bb44238f76412f42cdf7";
    }
    const { params } = t0;
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const { user, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { isRegistered, loading: eventLoading, registerForEvent, unregisterFromEvent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$event$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let event;
    let t1;
    let t10;
    let t11;
    let t12;
    let t13;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== authLoading || $[2] !== eventLoading || $[3] !== id || $[4] !== isRegistered || $[5] !== registerForEvent || $[6] !== router || $[7] !== unregisterFromEvent || $[8] !== user) {
        t13 = Symbol.for("react.early_return_sentinel");
        bb0: {
            let t14;
            if ($[23] !== id) {
                t14 = ({
                    "EventDetailsPage[EVENTS.find()]": (e)=>e.id === id
                })["EventDetailsPage[EVENTS.find()]"];
                $[23] = id;
                $[24] = t14;
            } else {
                t14 = $[24];
            }
            event = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENTS"].find(t14);
            if (!event) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
            }
            const registered = isRegistered(event.id);
            if (authLoading || eventLoading) {
                let t15;
                if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
                    t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-[50vh] flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "animate-spin text-forest-green"
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/events/[id]/page.tsx",
                            lineNumber: 71,
                            columnNumber: 80
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/events/[id]/page.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this);
                    $[25] = t15;
                } else {
                    t15 = $[25];
                }
                t13 = t15;
                break bb0;
            }
            t10 = "space-y-6 animate-in slide-in-from-bottom-4 duration-500";
            if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
                t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/events",
                    className: "inline-flex items-center text-sm text-muted-foreground hover:text-forest-green transition-colors mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4 mr-1"
                        }, void 0, false, {
                            fileName: "[project]/app/(main)/events/[id]/page.tsx",
                            lineNumber: 81,
                            columnNumber: 150
                        }, this),
                        " Back to Events"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                    lineNumber: 81,
                    columnNumber: 15
                }, this);
                $[26] = t11;
            } else {
                t11 = $[26];
            }
            let t15;
            if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
                t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                    lineNumber: 88,
                    columnNumber: 15
                }, this);
                $[27] = t15;
            } else {
                t15 = $[27];
            }
            let t16;
            if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
                t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                    lineNumber: 95,
                    columnNumber: 15
                }, this);
                $[28] = t16;
            } else {
                t16 = $[28];
            }
            let t17;
            if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
                t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                    lineNumber: 102,
                    columnNumber: 15
                }, this);
                $[29] = t17;
            } else {
                t17 = $[29];
            }
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: event.image,
                        alt: event.title,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/events/[id]/page.tsx",
                        lineNumber: 107,
                        columnNumber: 97
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white",
                            children: [
                                registered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-1.5 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-bold mb-3 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 469
                                        }, this),
                                        " Registered"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 329
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl md:text-5xl font-bold mb-2",
                                    children: event.title
                                }, void 0, false, {
                                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 527
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-4 text-white/90 text-sm md:text-base",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                t15,
                                                " ",
                                                event.date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 670
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                t16,
                                                " ",
                                                event.time
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 739
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                t17,
                                                " ",
                                                event.location
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 808
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 597
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(main)/events/[id]/page.tsx",
                            lineNumber: 107,
                            columnNumber: 286
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/events/[id]/page.tsx",
                        lineNumber: 107,
                        columnNumber: 179
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/events/[id]/page.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this);
            t8 = "grid md:grid-cols-3 gap-8 mt-8";
            let t18;
            if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
                t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-forest-green mb-4",
                    children: "About the Event"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                    lineNumber: 111,
                    columnNumber: 15
                }, this);
                $[30] = t18;
            } else {
                t18 = $[30];
            }
            const t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prose dark:prose-invert max-w-none",
                children: [
                    t18,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg leading-relaxed",
                        children: event.fullDescription
                    }, void 0, false, {
                        fileName: "[project]/app/(main)/events/[id]/page.tsx",
                        lineNumber: 116,
                        columnNumber: 76
                    }, this),
                    registered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-green-800 dark:text-green-200 mb-2",
                                children: "Participant Information"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                lineNumber: 116,
                                columnNumber: 272
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-green-700 dark:text-green-300 text-sm mb-4",
                                children: [
                                    "Thank you for registering! Please arrive 15 minutes before the start time at the ",
                                    event.location,
                                    ". Show this screen to the event coordinator upon arrival."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                lineNumber: 116,
                                columnNumber: 366
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "EventDetailsPage[<button>.onClick]": async ()=>{
                                        if (confirm("Are you sure you want to cancel your registration?")) {
                                            await unregisterFromEvent(event.id);
                                            router.refresh();
                                        }
                                    }
                                }["EventDetailsPage[<button>.onClick]"],
                                className: "text-sm text-red-500 hover:text-red-700 underline",
                                children: "Cancel Registration"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                lineNumber: 116,
                                columnNumber: 587
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/events/[id]/page.tsx",
                        lineNumber: 116,
                        columnNumber: 156
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 p-6 bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold mb-2",
                                children: "Join this Event"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                lineNumber: 123,
                                columnNumber: 276
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground text-sm mb-6",
                                children: "Register now to secure your spot."
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                lineNumber: 123,
                                columnNumber: 327
                            }, this),
                            user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "EventDetailsPage[<button>.onClick]": ()=>registerForEvent(event.id)
                                }["EventDetailsPage[<button>.onClick]"],
                                className: "bg-forest-green hover:bg-forest-green/90 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105",
                                children: "Register - Free"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                lineNumber: 123,
                                columnNumber: 422
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "text-forest-green font-bold hover:underline",
                                children: "Sign in to register"
                            }, void 0, false, {
                                fileName: "[project]/app/(main)/events/[id]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 215
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(main)/events/[id]/page.tsx",
                        lineNumber: 123,
                        columnNumber: 151
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(main)/events/[id]/page.tsx",
                lineNumber: 116,
                columnNumber: 19
            }, this);
            if ($[31] !== t19) {
                t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:col-span-2 space-y-6",
                    children: t19
                }, void 0, false, {
                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                    lineNumber: 127,
                    columnNumber: 14
                }, this);
                $[31] = t19;
                $[32] = t9;
            } else {
                t9 = $[32];
            }
            t7 = "space-y-6";
            t5 = "bg-card p-6 rounded-xl border shadow-sm sticky top-24";
            if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
                t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-bold mb-4",
                    children: "Event Details"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                    lineNumber: 136,
                    columnNumber: 14
                }, this);
                $[33] = t6;
            } else {
                t6 = $[33];
            }
            t4 = "space-y-4 text-sm";
            if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
                t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-muted-foreground text-xs uppercase tracking-wider mb-1",
                    children: "Date"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                    lineNumber: 143,
                    columnNumber: 14
                }, this);
                $[34] = t3;
            } else {
                t3 = $[34];
            }
            t1 = "font-medium";
            t2 = new Date(event.date).toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            });
        }
        $[1] = authLoading;
        $[2] = eventLoading;
        $[3] = id;
        $[4] = isRegistered;
        $[5] = registerForEvent;
        $[6] = router;
        $[7] = unregisterFromEvent;
        $[8] = user;
        $[9] = event;
        $[10] = t1;
        $[11] = t10;
        $[12] = t11;
        $[13] = t12;
        $[14] = t13;
        $[15] = t2;
        $[16] = t3;
        $[17] = t4;
        $[18] = t5;
        $[19] = t6;
        $[20] = t7;
        $[21] = t8;
        $[22] = t9;
    } else {
        event = $[9];
        t1 = $[10];
        t10 = $[11];
        t11 = $[12];
        t12 = $[13];
        t13 = $[14];
        t2 = $[15];
        t3 = $[16];
        t4 = $[17];
        t5 = $[18];
        t6 = $[19];
        t7 = $[20];
        t8 = $[21];
        t9 = $[22];
    }
    if (t13 !== Symbol.for("react.early_return_sentinel")) {
        return t13;
    }
    let t14;
    if ($[35] !== t1 || $[36] !== t2) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[35] = t1;
        $[36] = t2;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    let t15;
    if ($[38] !== t14 || $[39] !== t3) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t3,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[38] = t14;
        $[39] = t3;
        $[40] = t15;
    } else {
        t15 = $[40];
    }
    let t16;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "block text-muted-foreground text-xs uppercase tracking-wider mb-1",
            children: "Time"
        }, void 0, false, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[41] = t16;
    } else {
        t16 = $[41];
    }
    let t17;
    if ($[42] !== event.time) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium",
                    children: event.time
                }, void 0, false, {
                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                    lineNumber: 224,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[42] = event.time;
        $[43] = t17;
    } else {
        t17 = $[43];
    }
    let t18;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "block text-muted-foreground text-xs uppercase tracking-wider mb-1",
            children: "Location"
        }, void 0, false, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[44] = t18;
    } else {
        t18 = $[44];
    }
    let t19;
    if ($[45] !== event.location) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium",
                    children: event.location
                }, void 0, false, {
                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                    lineNumber: 239,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[45] = event.location;
        $[46] = t19;
    } else {
        t19 = $[46];
    }
    let t20;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
            className: "border-stone-100 dark:border-stone-800 pt-2"
        }, void 0, false, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[47] = t20;
    } else {
        t20 = $[47];
    }
    let t21;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-2xl font-bold text-forest-green mb-1",
                    children: "Free"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                    lineNumber: 254,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-muted-foreground",
                    children: "For Members"
                }, void 0, false, {
                    fileName: "[project]/app/(main)/events/[id]/page.tsx",
                    lineNumber: 254,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    let t22;
    if ($[49] !== t15 || $[50] !== t17 || $[51] !== t19 || $[52] !== t4) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t15,
                t17,
                t19,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[49] = t15;
        $[50] = t17;
        $[51] = t19;
        $[52] = t4;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] !== t22 || $[55] !== t5 || $[56] !== t6) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[54] = t22;
        $[55] = t5;
        $[56] = t6;
        $[57] = t23;
    } else {
        t23 = $[57];
    }
    let t24;
    if ($[58] !== t23 || $[59] !== t7) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t23
        }, void 0, false, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[58] = t23;
        $[59] = t7;
        $[60] = t24;
    } else {
        t24 = $[60];
    }
    let t25;
    if ($[61] !== t24 || $[62] !== t8 || $[63] !== t9) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t9,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[61] = t24;
        $[62] = t8;
        $[63] = t9;
        $[64] = t25;
    } else {
        t25 = $[64];
    }
    let t26;
    if ($[65] !== t10 || $[66] !== t11 || $[67] !== t12 || $[68] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t12,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/app/(main)/events/[id]/page.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[65] = t10;
        $[66] = t11;
        $[67] = t12;
        $[68] = t25;
        $[69] = t26;
    } else {
        t26 = $[69];
    }
    return t26;
}
_s(EventDetailsPage, "MJ3ZO05N1KG4f74O7mKLyhRkDtk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$event$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EventDetailsPage;
var _c;
__turbopack_context__.k.register(_c, "EventDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LoaderCircle
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MapPin
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
];
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("map-pin", __iconNode);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowLeft
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleCheck
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
];
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-check", __iconNode);
;
 //# sourceMappingURL=circle-check.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_933855a9._.js.map