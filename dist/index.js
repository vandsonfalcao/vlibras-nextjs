"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function VLibras({ forceOnload }) {
    (0, react_1.useEffect)(() => {
        const script = document.createElement("script");
        script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
        script.async = true;
        const widgetUrl = `https://vlibras.gov.br/app`;
        script.onload = (load) => {
            // @ts-ignore
            new window.VLibras.Widget(widgetUrl);
            if (forceOnload) {
                // @ts-ignore
                window.onload();
            }
        };
        document.head.appendChild(script);
    }, [forceOnload]);
    return (
    // @ts-ignore
    <div vw="true" className="enabled">
			<div vw-access-button="true" className="active"/>
			<div vw-plugin-wrapper="true">
				<div className="vw-plugin-top-wrapper"/>
			</div>
		</div>);
}
exports.default = VLibras;
//# sourceMappingURL=index.js.map