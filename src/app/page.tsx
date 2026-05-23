import React from "react";
import About from "@/components/landing/About";
import Container from "@/components/common/Container";

export default function page() {
  return (
    <Container className="min-h-screen py-16">
      <About />
    </Container>
  );
}
