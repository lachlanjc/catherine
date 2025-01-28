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
      className={`flex items-center gap-3 no-underline border border-stone-400 dark:border-stone-600 rounded-lg px-4 py-2 shadow transition-shadow hover:shadow-md`}
    />
  )
}
