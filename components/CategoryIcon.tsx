// Mapeo categoría → ícono Lucide (sustituye los emojis; trazo técnico del design system).
// Las sustituciones siguen el mapeo del handoff (faroles→lightbulb, stop→octagon, etc.).
import {
  Lightbulb,
  Octagon,
  Zap,
  Frame,
  RectangleHorizontal,
  Flashlight,
  Cable,
  Lock,
  GripHorizontal,
  Cylinder,
  ScanLine,
  Package,
  type LucideProps,
} from "lucide-react";

const MAPA: Record<string, React.ComponentType<LucideProps>> = {
  Farol: Lightbulb,
  Stop: Octagon,
  Luz: Zap,
  Direccional: Zap,
  Esquinero: Frame,
  Aleta: Frame,
  Espejo: RectangleHorizontal,
  Exploradora: Flashlight,
  Conector: Cable,
  Cerrajería: Lock,
  Manija: GripHorizontal,
  Pistón: Cylinder,
  Reflectivo: ScanLine,
};

export function CategoryIcon({
  categoria,
  ...props
}: { categoria: string } & LucideProps) {
  const Icono = MAPA[categoria] ?? Package;
  return <Icono {...props} />;
}
