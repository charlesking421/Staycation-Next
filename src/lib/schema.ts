import { z } from "zod";

const schemaInformation = z.object({
  first_name: z.string().min(2).max(20),
  last_name: z.string().min(2).max(20),
  email: z.string().email(),
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
      message: `Kindly upload your invoice`,
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
  bank: z.string().min(2).max(20),
  account_name: z.string().min(2).max(20),
});

export type SchemaInformation = z.infer<typeof schemaInformation>;
export type SchemaBankAccount = z.infer<typeof schemaBankAccount>;

const combineSchema = schemaInformation.merge(schemaBankAccount);

export type CombinedSchema = z.infer<typeof combineSchema>;

export { schemaInformation, schemaBankAccount };
