import Link from "next/link";

interface LinkProps {
  herf: string;
  label: string;
  className?: string;
}

const CustomLink = ({ herf, label, className }: LinkProps) => {
  return (
    <div>
      <Link href={herf} className={`text-draw inline-block ${className}`}>
        <p className="text-draw-p mb-0 relative">{label}</p>
        <div className="text-draw_box relative w-full h-2" />
      </Link>
    </div>
  );
};

export default CustomLink;
