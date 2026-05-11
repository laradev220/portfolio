import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-tokyo-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-tokyo-muted text-sm">
          <span className="text-tokyo-green">const</span> builtWith = <span className="text-tokyo-string">"React + Tailwind"</span>;
          {' '}
          <span className="text-tokyo-comment">//</span> with{' '}
          <span className="text-tokyo-red inline-flex items-center gap-1">
            <Heart size={14} />
          </span>
        </p>
        <p className="text-tokyo-muted text-sm mt-2">
          © {currentYear} Muhammad Irfan. <span className="text-tokyo-string">All rights reserved.</span>
        </p>
      </div>
    </footer>
  )
}