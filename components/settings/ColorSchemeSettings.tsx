"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useSettings from "@/hooks/useSettings";

interface ColorSchemeSettingsProps {
	initialColorScheme?: string;
}

const getThemeVariants = (parentTheme: string, colorSchemes: Record<string, any>) => {
	return Object.entries(colorSchemes)

		.filter(([, scheme]) => scheme.parentTheme === parentTheme)
		.map(([key, scheme]) => ({ key, ...scheme }));
};

const getMainThemes = (colorSchemes: Record<string, any>) => {
	return Object.entries(colorSchemes)
		.filter(([, scheme]) => !scheme.parentTheme)
		.map(([key]) => key);
};

const ColorSchemeSettings = ({ initialColorScheme = "default" }: ColorSchemeSettingsProps) => {
	const { selectedColorScheme, handleColorSchemeChange, colorSchemes } = useSettings({
		initialColorScheme,
	});

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const renderColorScheme = (colorSchemeName: string) => {
		const active = selectedColorScheme === colorSchemeName;
		const scheme = colorSchemes[colorSchemeName];
		const variants = getThemeVariants(colorSchemeName, colorSchemes);
		const hasVariants = variants.length > 0;

		return (
			<div key={colorSchemeName} className="space-y-2">
				<div
					className={`group relative cursor-pointer rounded-xl border p-4 text-left transition-all duration-200 hover:border-primary/50 hover:shadow-lg w-full${
						active
							? "border-primary bg-primary/5 shadow-md ring-2 ring-primary/10"
							: "border-border/40 hover:bg-accent/20"
					}
          			`}
					onClick={() => handleColorSchemeChange(colorSchemeName)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleColorSchemeChange(colorSchemeName);
						}
					}}
				>
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-4">
							<div className="flex gap-1">
								<div
									className="h-5 w-5 rounded-lg border border-white/20 shadow-sm"
									style={{ backgroundColor: scheme.preview.background }}
								/>
								<div
									className="h-5 w-5 rounded-lg border border-white/20 shadow-sm"
									style={{ backgroundColor: scheme.preview.foreground }}
								/>
								<div
									className="h-5 w-5 rounded-lg border border-white/20 shadow-sm"
									style={{ backgroundColor: scheme.preview.primary }}
								/>
								<div
									className="h-5 w-5 rounded-lg border border-white/20 shadow-sm"
									style={{ backgroundColor: scheme.preview.secondary }}
								/>
							</div>

							<div className="flex-1">
								<div className="flex items-center gap-2">
									<span className="font-medium text-base">{scheme.name}</span>
									{active && mounted && (
										<Badge
											variant="default"
											className="border-primary/20 bg-primary/10 px-2 py-0.5 text-primary text-xs"
										>
											Active
										</Badge>
									)}
								</div>
							</div>
						</div>

						{active && mounted && (
							<div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
								<Check className="h-4 w-4 text-primary-foreground" />
							</div>
						)}
					</div>

					{hasVariants && mounted && (
						<div className="mt-4 border-border/30 border-t pt-3">
							<div className="flex flex-wrap gap-3">
								{variants.map((variant) => {
									const variantActive = selectedColorScheme === variant.key;

									return (
										<div
											key={variant.key}
											className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-accent/30 border${variantActive ? "border-primary bg-primary/10" : "border-border/40"}
                      						`}
											onClick={(e) => {
												e.stopPropagation();
												handleColorSchemeChange(variant.key);
											}}
											onKeyDown={(e) => {
												e.stopPropagation();
												if (e.key === "Enter") {
													handleColorSchemeChange(variant.key);
												}
											}}
										>
											<div
												className="h-3 w-3 rounded-full border border-white/20 shadow-sm"
												style={{ backgroundColor: variant.preview.primary }}
											/>
											<span className="font-medium text-sm">
												{variant.name}
											</span>
											{variantActive && (
												<Check className="h-3 w-3 text-primary" />
											)}
										</div>
									);
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		);
	};

	const mainThemes = getMainThemes(colorSchemes);

	return (
		<Card className="border-0 shadow-sm" suppressHydrationWarning>
			<CardHeader className="pb-4">
				<CardTitle className="flex items-center gap-2 text-xl">Color Schemes</CardTitle>
				<p className="text-muted-foreground text-sm">
					Choose a color scheme that matches your dashboard style
				</p>
			</CardHeader>
			<CardContent className="space-y-3">
				{mainThemes.map((schemeName) => renderColorScheme(schemeName))}
			</CardContent>
		</Card>
	);
};

export default ColorSchemeSettings;
