export const walletService = {
  connect: async (userId: string, address: string, network: string) => {
    return {
      success: true,
      wallet: {
        userId,
        address,
        network,
      },
    };
  },
};
