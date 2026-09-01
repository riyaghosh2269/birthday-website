import { useForm } from "@tanstack/react-form";

import { CheckCircle2, Send } from "lucide-react";

import { useBirthdayStore } from "./store/birthday-store";

import { cn } from "@/utils/cn";

const WishForm = () => {
  const saveWish = useBirthdayStore((state) => state.saveWish);

  const savedWish = useBirthdayStore((state) => state.wish);

  const form = useForm({
    defaultValues: {
      message: savedWish,
    },

    onSubmit: async ({ value }) => {
      saveWish(value.message.trim());
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();

        form.handleSubmit();
      }}
      className="mx-auto mt-10 max-w-xl text-left"
    >
      <form.Field
        name="message"
        validators={{
          onChange: ({ value }) => {
            if (value.trim().length === 0) {
              return "Please write a birthday message.";
            }

            if (value.length > 200) {
              return "Keep the message under 200 characters.";
            }

            return undefined;
          },
        }}
      >
        {(field) => (
          <div>
            <label
              htmlFor={field.name}
              className={cn(
                "mb-2 block",
                "text-sm font-semibold",
                "text-foreground",
              )}
            >
              Write a birthday wish
            </label>

            <textarea
              id={field.name}
              name={field.name}
              rows={4}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => field.handleChange(event.target.value)}
              placeholder="Happy birthday! Wishing you an amazing year ahead..."
              className={cn(
                "w-full resize-none",
                "rounded-2xl",
                "border",
                "border-primary/20",
                "bg-background",
                "px-4 py-4",
                "text-sm",
                "text-foreground",
                "outline-none",
                "transition",
                "placeholder:text-foreground/35",
                "focus:border-primary/50",
                "focus:ring-4",
                "focus:ring-primary/10",
              )}
            />

            <div className="mt-2 flex min-h-5 items-start justify-between gap-4">
              <div>
                {field.state.meta.errors.length > 0 && (
                  <p className="text-xs text-primary">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </div>

              <p className="shrink-0 text-xs text-foreground/40">
                {field.state.value.length}
                /200
              </p>
            </div>
          </div>
        )}
      </form.Field>

      <form.Subscribe
        selector={(state) =>
          [state.canSubmit, state.isSubmitting, state.values.message] as const
        }
      >
        {([canSubmit, isSubmitting, message]) => (
          <button
            type="submit"
            disabled={!canSubmit || isSubmitting || !message.trim()}
            className={cn(
              "mt-4 flex w-full",
              "items-center justify-center",
              "gap-2 rounded-2xl",
              "bg-primary",
              "px-6 py-3",
              "font-semibold",
              "text-background",
              "transition",
              "hover:scale-[1.01]",
              "disabled:cursor-not-allowed",
              "disabled:opacity-50",
            )}
          >
            {savedWish === message.trim() && savedWish ? (
              <>
                <CheckCircle2 className="size-4" />
                Wish Saved
              </>
            ) : (
              <>
                <Send className="size-4" />

                {isSubmitting ? "Saving..." : "Save My Wish"}
              </>
            )}
          </button>
        )}
      </form.Subscribe>
    </form>
  );
};

export default WishForm;
