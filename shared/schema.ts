import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Annual Report Type Definitions (static data - no database persistence needed)
export const heroMetricSchema = z.object({
  id: z.string(),
  value: z.number(),
  label: z.string(),
  duration: z.number(),
});

export const delegationSchema = z.object({
  id: z.string(),
  country: z.string(),
  lat: z.number(),
  lng: z.number(),
  event: z.string(),
  date: z.string(),
  details: z.string(),
  featured: z.boolean(),
});

export const cohortPhaseSchema = z.object({
  phase: z.string(),
  count: z.number(),
  industries: z.array(z.string()),
});

export const cohortDataSchema = z.object({
  name: z.string(),
  total: z.number(),
  phases: z.array(cohortPhaseSchema),
});

export const digitalGrowthMetricSchema = z.object({
  label: z.string(),
  value: z.number(),
  suffix: z.string(),
  icon: z.string(),
});

export const timelineEventSchema = z.object({
  id: z.string(),
  month: z.string(),
  day: z.union([z.number(), z.string()]),
  year: z.number(),
  title: z.string(),
  description: z.string(),
  attendees: z.string().optional(),
  featured: z.boolean().optional(),
});

export const challengeSchema = z.object({
  id: z.string(),
  icon: z.string(),
  title: z.string(),
  details: z.array(z.string()),
  response: z.string(),
});

export const strategicPillarSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

export const funnelStageSchema = z.object({
  stage: z.string(),
  value: z.number(),
  percentage: z.number(),
  color: z.string(),
});

// Export Types
export type HeroMetric = z.infer<typeof heroMetricSchema>;
export type Delegation = z.infer<typeof delegationSchema>;
export type CohortPhase = z.infer<typeof cohortPhaseSchema>;
export type CohortData = z.infer<typeof cohortDataSchema>;
export type DigitalGrowthMetric = z.infer<typeof digitalGrowthMetricSchema>;
export type TimelineEvent = z.infer<typeof timelineEventSchema>;
export type Challenge = z.infer<typeof challengeSchema>;
export type StrategicPillar = z.infer<typeof strategicPillarSchema>;
export type FunnelStage = z.infer<typeof funnelStageSchema>;
