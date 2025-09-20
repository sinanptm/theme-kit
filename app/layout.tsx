import "@/styles/globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { WrapperProps } from "@/types";

const RootLayout = ({ children }: WrapperProps) => {
	return (
		<html lang="en">
			<body className={`antialiased`}>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;