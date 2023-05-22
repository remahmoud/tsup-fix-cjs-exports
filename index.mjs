import fs from "node:fs";
import path from "node:path";

export default function fixCjsExports() {
    return {
        name: "convert-default-to-module-exports",
        buildEnd(result) {
            try {
                result.writtenFiles.forEach((file) => {
                    const filePath = path.join(process.cwd(), file.name);
                    if (file.name.endsWith(".js")) {
                        const content = fs.readFileSync(filePath, "utf-8");
                        const newContent = content.replace(
                            /(module\.)?exports\.default/g,
                            "module.exports"
                        );
                        fs.writeFileSync(filePath, newContent, "utf8");
                    }
                });
            } catch (e) {
                console.error(e);
            }
        },
    };
}
