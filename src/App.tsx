import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { MainLayout } from '@/components/layout/MainLayout';
import HomePage from '@/pages/HomePage';
import DocsPage from '@/pages/DocsPage';
import NotFound from '@/pages/NotFound';

// Component Pages
import { ButtonPage } from '@/pages/components/ButtonPage';
import { CardPage } from '@/pages/components/CardPage';
import { BadgePage } from '@/pages/components/BadgePage';
import { AlertPage } from '@/pages/components/AlertPage';
import { DialogPage } from '@/pages/components/DialogPage';
import { ToastPage } from '@/pages/components/ToastPage';
import { InputPage } from '@/pages/components/InputPage';
import { ProgressPage } from '@/pages/components/ProgressPage';
import { LoginFormPage } from '@/pages/components/LoginFormPage';
import { HeroSectionPage } from '@/pages/components/HeroSectionPage';
import { PricingPage } from '@/pages/components/PricingPage';
import { TabsPage } from '@/pages/components/TabsPage';
import { AvatarPage } from '@/pages/components/AvatarPage';
import { SkeletonPage } from '@/pages/components/SkeletonPage';
import { TablePage } from '@/pages/components/TablePage';
import { SelectPage } from '@/pages/components/SelectPage';
import { SwitchPage } from '@/pages/components/SwitchPage';
import { CheckboxPage } from '@/pages/components/CheckboxPage';
import { AccordionPage } from '@/pages/components/AccordionPage';
import { TooltipPage } from '@/pages/components/TooltipPage';
import { DropdownMenuPage } from '@/pages/components/DropdownMenuPage';
import { SheetPage } from '@/pages/components/SheetPage';
import { FooterPage } from '@/pages/components/FooterPage';
import { NavbarComponentPage } from '@/pages/components/NavbarComponentPage';
import { BottomBarPage } from '@/pages/components/BottomBarPage';
import { IconShowcasePage } from '@/pages/components/IconShowcasePage';
import { SidebarComponentPage } from '@/pages/components/SidebarComponentPage';
import { TestimonialsPage } from '@/pages/components/TestimonialsPage';
import { CalendarPage } from '@/pages/components/CalendarPage';
import { CarouselPage } from '@/pages/components/CarouselPage';
import { ChartPage } from '@/pages/components/ChartPage';
import { DatePickerPage } from '@/pages/components/DatePickerPage';
import { SliderPage } from '@/pages/components/SliderPage';
import { PopoverPage } from '@/pages/components/PopoverPage';
import { LabelPage } from '@/pages/components/LabelPage';
import { TextareaPage } from '@/pages/components/TextareaPage';
import { TogglePage } from '@/pages/components/TogglePage';
import { ToggleGroupPage } from '@/pages/components/ToggleGroupPage';
import { RadioGroupPage } from '@/pages/components/RadioGroupPage';
import { SeparatorPage } from '@/pages/components/SeparatorPage';
import { ResizablePage } from '@/pages/components/ResizablePage';
import { ScrollAreaPage } from '@/pages/components/ScrollAreaPage';
import { FormPage } from '@/pages/components/FormPage';
import { SonnerPage } from '@/pages/components/SonnerPage';
import { CommandPage } from '@/pages/components/CommandPage';
import { HoverCardPage } from '@/pages/components/HoverCardPage';
import { MenubarPage } from '@/pages/components/MenubarPage';
import { NavigationMenuPage } from '@/pages/components/NavigationMenuPage';
import { AlertDialogPage } from '@/pages/components/AlertDialogPage';
import { AspectRatioPage } from '@/pages/components/AspectRatioPage';
import { BreadcrumbPage } from '@/pages/components/BreadcrumbPage';
import { CollapsiblePage } from '@/pages/components/CollapsiblePage';
import { ContextMenuPage } from '@/pages/components/ContextMenuPage';
import { ComboboxPage } from '@/pages/components/ComboboxPage';
import { DataTablePage } from '@/pages/components/DataTablePage';
import { InputOTPPage } from '@/pages/components/InputOTPPage';
import { PaginationPage } from '@/pages/components/PaginationPage';
import { DashboardPage } from '@/pages/components/DashboardPage';
import { ContactFormBackendPage } from '@/pages/components/ContactFormBackendPage';
import { TodoCrudPage } from '@/pages/components/TodoCrudPage';
import { FeedbackWidgetPage } from '@/pages/components/FeedbackWidgetPage';

// Animated Component Pages
import { AnimatedBackgroundPage } from '@/pages/components/AnimatedBackgroundPage';
import { AnimatedButtonPage } from '@/pages/components/AnimatedButtonPage';
import { AnimatedIconPage } from '@/pages/components/AnimatedIconPage';
import { AnimatedHeroPage } from '@/pages/components/AnimatedHeroPage';
import { AnimatedWelcomePage } from '@/pages/components/AnimatedWelcomePage';
import { AnimatedNavbarPage } from '@/pages/components/AnimatedNavbarPage';
import { AnimatedBottomBarPage } from '@/pages/components/AnimatedBottomBarPage';
import { AnimatedLoginPage } from '@/pages/components/AnimatedLoginPage';
import { AnimatedSidebarPage } from '@/pages/components/AnimatedSidebarPage';
import { AnimatedHamburgerPage } from '@/pages/components/AnimatedHamburgerPage';
import { AnimatedIconsPage } from '@/pages/components/AnimatedIconsPage';
import { AnimatedContactPage } from '@/pages/components/AnimatedContactPage';
import { AnimatedCardsPage } from '@/pages/components/AnimatedCardsPage';
import { AnimatedTabsPage } from '@/pages/components/AnimatedTabsPage';
import { AnimatedListPage } from '@/pages/components/AnimatedListPage';
import { AnimatedTooltipPage } from '@/pages/components/AnimatedTooltipPage';
import { AnimatedModalPage } from '@/pages/components/AnimatedModalPage';
import { AnimatedProgressPage } from '@/pages/components/AnimatedProgressPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/docs/getting-started" element={<DocsPage />} />
              <Route path="/sign-in/*" element={<SignInPage />} />
              <Route path="/sign-up/*" element={<SignUpPage />} />
              
              {/* Component Routes */}
              <Route path="/components/button" element={<ButtonPage />} />
              <Route path="/components/card" element={<CardPage />} />
              <Route path="/components/badge" element={<BadgePage />} />
              <Route path="/components/alert" element={<AlertPage />} />
              <Route path="/components/alert-dialog" element={<AlertDialogPage />} />
              <Route path="/components/aspect-ratio" element={<AspectRatioPage />} />
              <Route path="/components/dialog" element={<DialogPage />} />
              <Route path="/components/toast" element={<ToastPage />} />
              <Route path="/components/input" element={<InputPage />} />
              <Route path="/components/progress" element={<ProgressPage />} />
              <Route path="/components/login-form" element={<LoginFormPage />} />
              <Route path="/components/hero-section" element={<HeroSectionPage />} />
              <Route path="/components/pricing" element={<PricingPage />} />
              <Route path="/components/tabs" element={<TabsPage />} />
              <Route path="/components/avatar" element={<AvatarPage />} />
              <Route path="/components/skeleton" element={<SkeletonPage />} />
              <Route path="/components/table" element={<TablePage />} />
              <Route path="/components/select" element={<SelectPage />} />
              <Route path="/components/switch" element={<SwitchPage />} />
              <Route path="/components/checkbox" element={<CheckboxPage />} />
              <Route path="/components/accordion" element={<AccordionPage />} />
              <Route path="/components/tooltip" element={<TooltipPage />} />
              <Route path="/components/dropdown-menu" element={<DropdownMenuPage />} />
              <Route path="/components/sheet" element={<SheetPage />} />
              <Route path="/components/drawer" element={<SheetPage />} />
              <Route path="/components/footer" element={<FooterPage />} />
              <Route path="/components/navbar" element={<NavbarComponentPage />} />
              <Route path="/components/bottom-bar" element={<BottomBarPage />} />
              <Route path="/components/icons" element={<IconShowcasePage />} />
              <Route path="/components/sidebar" element={<SidebarComponentPage />} />
              <Route path="/components/testimonials" element={<TestimonialsPage />} />
              <Route path="/components/calendar" element={<CalendarPage />} />
              <Route path="/components/carousel" element={<CarouselPage />} />
              <Route path="/components/chart" element={<ChartPage />} />
              <Route path="/components/date-picker" element={<DatePickerPage />} />
              <Route path="/components/slider" element={<SliderPage />} />
              <Route path="/components/popover" element={<PopoverPage />} />
              <Route path="/components/label" element={<LabelPage />} />
              <Route path="/components/textarea" element={<TextareaPage />} />
              <Route path="/components/toggle" element={<TogglePage />} />
              <Route path="/components/toggle-group" element={<ToggleGroupPage />} />
              <Route path="/components/radio-group" element={<RadioGroupPage />} />
              <Route path="/components/separator" element={<SeparatorPage />} />
              <Route path="/components/resizable" element={<ResizablePage />} />
              <Route path="/components/scroll-area" element={<ScrollAreaPage />} />
              <Route path="/components/form" element={<FormPage />} />
              <Route path="/components/sonner" element={<SonnerPage />} />
              <Route path="/components/command" element={<CommandPage />} />
              <Route path="/components/hover-card" element={<HoverCardPage />} />
              <Route path="/components/menubar" element={<MenubarPage />} />
              <Route path="/components/navigation-menu" element={<NavigationMenuPage />} />
              <Route path="/components/breadcrumb" element={<BreadcrumbPage />} />
              <Route path="/components/collapsible" element={<CollapsiblePage />} />
              <Route path="/components/context-menu" element={<ContextMenuPage />} />
              <Route path="/components/combobox" element={<ComboboxPage />} />
              <Route path="/components/data-table" element={<DataTablePage />} />
              <Route path="/components/input-otp" element={<InputOTPPage />} />
              <Route path="/components/pagination" element={<PaginationPage />} />
              <Route path="/components/dashboard" element={<DashboardPage />} />
              <Route path="/components/contact-form-backend" element={<ContactFormBackendPage />} />
              <Route path="/components/todo-crud" element={<TodoCrudPage />} />
              <Route path="/components/feedback-widget" element={<FeedbackWidgetPage />} />
              
              {/* Animation Routes */}
              <Route path="/components/animated-background" element={<AnimatedBackgroundPage />} />
              <Route path="/components/animated-button" element={<AnimatedButtonPage />} />
              <Route path="/components/animated-icon" element={<AnimatedIconPage />} />
              <Route path="/components/animated-hero" element={<AnimatedHeroPage />} />
              <Route path="/components/animated-welcome" element={<AnimatedWelcomePage />} />
              <Route path="/components/animated-navbar" element={<AnimatedNavbarPage />} />
              <Route path="/components/animated-bottom-bar" element={<AnimatedBottomBarPage />} />
              <Route path="/components/animated-login" element={<AnimatedLoginPage />} />
              <Route path="/components/animated-sidebar" element={<AnimatedSidebarPage />} />
              <Route path="/components/animated-hamburger" element={<AnimatedHamburgerPage />} />
              <Route path="/components/animated-icons" element={<AnimatedIconsPage />} />
              <Route path="/components/animated-contact" element={<AnimatedContactPage />} />
              <Route path="/components/animated-cards" element={<AnimatedCardsPage />} />
              <Route path="/components/animated-tabs" element={<AnimatedTabsPage />} />
              <Route path="/components/animated-list" element={<AnimatedListPage />} />
              <Route path="/components/animated-tooltip" element={<AnimatedTooltipPage />} />
              <Route path="/components/animated-modal" element={<AnimatedModalPage />} />
              <Route path="/components/animated-progress" element={<AnimatedProgressPage />} />
              
              <Route path="/components/*" element={<HomePage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
