import { z } from "zod";

const schemaInformation = z.object({
  first_name: z
    .string()
    .min(2, {
      message: "First name is required",
    })
    .max(20, { message: "Max 20 characters" }),
  last_name: z
    .string()
    .min(2, {
      message: "Last name is required",
    })
    .max(20, {
      message: "Max 20 characters",
    }),
  email: z
    .string()
    .min(4, {
      message: "Email is required",
    })
    .email(),
  phone_number: z.string().superRefine((value, ctx) => {
    if (!value) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Phone number is required`,
      });

      return;
    }

    if (!/^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Invalid phone number`,
      });
    }
  }),
});

const uploadInvoice = z.instanceof(FileList).superRefine((val, ctx) => {
  if (val.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Invoice is required`,
    });
    return;
  }

  const file = val[0];

  if (file.size > 2000000) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Max size 2MB`,
    });
  }

  if (!file.type.includes("pdf")) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Format should be PDF`,
    });
  }
});

const schemaBankAccount = z.object({
  upload_invoice: uploadInvoice,
  bank: z
    .string()
    .min(2, {
      message: "Bank Name is required",
    })
    .max(50, {
      message: "Max 50 characters",
    }),
  account_name: z
    .string()
    .min(2, {
      message: "Account Name is required",
    })
    .max(50, {
      message: "Max 50 characters",
    }),
});

export type SchemaInformation = z.infer<typeof schemaInformation>;
export type SchemaBankAccount = z.infer<typeof schemaBankAccount>;

const combineSchema = schemaInformation.merge(schemaBankAccount);

export type CombinedSchema = z.infer<typeof combineSchema>;

export { schemaInformation, schemaBankAccount };
