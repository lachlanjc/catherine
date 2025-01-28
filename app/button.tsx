export default function Button({
  primary = true,
  className,
  ...props
}: React.PropsWithChildren<React.ComponentPropsWithRef<'a'>> & {
  primary?: boolean
}) {
  return (
    <a
      {...props}
      className={`flex items-center gap-3 no-underline border border-stone-400 dark:border-stone-600 rounded-full px-4 py-1 shadow-sm transition-shadow hover:shadow-md`}
    />
  )
}
