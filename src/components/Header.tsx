
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/46545966-2c8a-4e1c-a38f-a4299bcf0186.png" 
              alt="Free Tools Forever" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center space-x-1">
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  MERGE PDF
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  SPLIT PDF
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  COMPRESS PDF
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 py-2">
                  CONVERT PDF
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">PDF to Word</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Convert PDF documents to editable Word files
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Word to PDF</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Convert Word documents to PDF format
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">JPG to PDF</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Convert JPG images to PDF documents
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">PNG to PDF</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Convert PNG images to PDF documents
                      </p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-10 px-4 py-2">
                  ALL PDF TOOLS
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">PDF to JPG</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Convert PDF pages to JPG images
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">PDF to PNG</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Convert PDF pages to PNG images
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Merge PDF</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Combine multiple PDF files into one
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Split PDF</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Split PDF into separate pages or ranges
                      </p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-sm font-medium">
              Login
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6">
              Sign up
            </Button>
            <Button variant="ghost" size="icon" className="p-2">
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">
                MERGE PDF
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">
                SPLIT PDF
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md">
                COMPRESS PDF
              </a>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md w-full">
                  CONVERT PDF
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem>PDF to Word</DropdownMenuItem>
                  <DropdownMenuItem>Word to PDF</DropdownMenuItem>
                  <DropdownMenuItem>JPG to PDF</DropdownMenuItem>
                  <DropdownMenuItem>PNG to PDF</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md w-full">
                  ALL PDF TOOLS
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem>PDF to JPG</DropdownMenuItem>
                  <DropdownMenuItem>PDF to PNG</DropdownMenuItem>
                  <DropdownMenuItem>Merge PDF</DropdownMenuItem>
                  <DropdownMenuItem>Split PDF</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                <Button variant="ghost" className="justify-start">
                  Login
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white justify-start">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
