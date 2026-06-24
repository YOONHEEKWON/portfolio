"use client";

import { useEffect, useState } from "react";

const COUNTER_KEY = "heekwon-portfolio-visits";
const API_BASE = "https://countapi.mileshilliard.com/api/v1";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const visited = sessionStorage.getItem("portfolio_visited");

    const fetchCount = async () => {
      try {
        const url = visited
          ? `${API_BASE}/get/${COUNTER_KEY}`
          : `${API_BASE}/hit/${COUNTER_KEY}`;

        const res = await fetch(url);
        const data = await res.json();

        const value = Number(data.value);
        if (!Number.isNaN(value)) {
          setCount(value);
          if (!visited) {
            sessionStorage.setItem("portfolio_visited", "1");
          }
        }
      } catch {
        // API 오류 시 표시하지 않음
      }
    };

    fetchCount();
  }, []);

  if (count === null) return null;

  return (
    <p className="text-sm text-foreground-inverse-muted">
      방문자{" "}
      <span className="font-medium text-accent">{count.toLocaleString()}</span>
    </p>
  );
}
