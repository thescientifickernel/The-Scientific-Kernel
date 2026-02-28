import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Lock } from 'lucide-react';
import { Section } from '../../types';
import ThemeToggle from '../ThemeToggle';

interface NavbarProps {
  activeSection: Section;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  user: any;
  handleNavigate: (section: Section, data?: any) => void;
  navLinks: { id: string; label: string; icon: any }[];
}

export default function Navbar({ 
  activeSection, 
  isMenuOpen, 
  setIsMenuOpen, 
  user, 
  handleNavigate, 
  navLinks 
}: NavbarProps) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-primary/10 border border-amber-primary/20 group-hover:border-amber-primary/40 transition-colors">
              <span className="text-2xl">🍿</span>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">
              The <span className="text-amber-primary">Scientific</span> Kernel
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id as Section)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-amber-primary ${
                  activeSection === link.id ? 'text-amber-primary' : 'text-text-muted'
                }`}
              >
                {link.label}
              </button>
            ))}
            {user ? (
              <button 
                onClick={() => handleNavigate('admin')}
                className={`flex items-center gap-2 text-sm font-medium tracking-wide uppercase transition-colors hover:text-amber-primary ${
                  activeSection === 'admin' ? 'text-amber-primary' : 'text-text-muted'
                }`}
              >
                <Lock size={14} /> Admin
              </button>
            ) : (
              <button 
                onClick={async () => {
                  const res = await fetch('/api/auth/google/url');
                  const { url } = await res.json();
                  window.open(url, 'oauth_popup', 'width=600,height=700');
                }}
                className="text-sm font-medium tracking-wide uppercase text-text-muted hover:text-amber-primary"
              >
                Login
              </button>
            )}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button 
              className="text-text-muted"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    handleNavigate(link.id as Section);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-4 text-2xl font-serif"
                >
                  <link.icon className="text-amber-primary" />
                  {link.label}
                </button>
              ))}
              {user && (
                <button
                  onClick={() => {
                    handleNavigate('admin');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-4 text-2xl font-serif"
                >
                  <Lock className="text-amber-primary" />
                  Admin
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
