"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICES } from "@/lib/services";

export function StropySidebar() {
  const pathname = usePathname();

  return (
    <aside className="stropy-sidebar">
      <div className="sidebar-inner">
        <h3 className="sidebar-title">Naše stropy</h3>
        <nav className="sidebar-nav">
          {SERVICES.map((service) => {
            const href = `/stropy/${service.slug}`;
            const isActive = pathname === href;
            return (
              <Link
                key={service.id}
                href={href}
                className={`sidebar-link ${isActive ? "active" : ""}`}
              >
                {service.title}
                <span className="link-arrow">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
