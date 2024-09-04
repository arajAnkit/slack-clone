import { auth } from "./auth";
import { query } from "./_generated/server";

// import { getAuthUserId } from "@convex-dev/auth/server";

export const current = query({
  args: {},
  handler: async (ctx) => {
    // Alert : getUserId deprecated
    const userId = await auth.getUserId(ctx);

    if (userId == null) return null;

    return await ctx.db.get(userId);
  },
});
