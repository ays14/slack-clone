const createResolver = (resolver) => {
  const baseResolver = resolver;
  baseResolver.createResolver = (childResolver) => {
    const newResolver = async (parent, args, context, info) => {
      await resolver(parent, args, context, info);
      return childResolver(parent, args, context, info);
    };
    return createResolver(newResolver);
  };
  return baseResolver;
};

// requiresAuth
export default createResolver((parent, args, { user }) => {
  if (!user || !user.id) {
    throw new Error('Not authenticated');
  }
});

// // this can be chained into further permissions
// export const requiresAuth = createResolver((parent, args, { user }) => {
//   if (!user || !user.id) {
//     throw new Error('Not authenticated');
//   }
// });

// export const requiresAdmin = requiresAuth.createResolver((parent, args, context) => {
//   if (!context.user.isAdmin) {
//     throw new Error('Admin Priviledges required');
//   }
// });
