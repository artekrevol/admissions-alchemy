export function Footer() {
  return (
    <footer className="section-padding py-10 border-t border-border">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-lg text-display">PatientFlow</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} PatientFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
