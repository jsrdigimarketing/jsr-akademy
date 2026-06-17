import Container from "@/components/ui/Container";
import GradientBg from "@/components/ui/GradientBg";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <GradientBg glow className="flex min-h-screen items-center">
      <Container className="py-32 text-center">
        <p className="font-display text-7xl font-extrabold text-brand-green sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-section font-bold text-brand-white">
          This page took a different path
        </h1>
        <p className="mx-auto mt-4 max-w-md text-brand-white/75">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">Back home</Button>
          <Button href="/courses" variant="secondary">
            Browse courses
          </Button>
        </div>
      </Container>
    </GradientBg>
  );
}
