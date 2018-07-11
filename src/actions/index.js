let nextAssetId = 0
export const addAsset = asset => ({
    type: 'ADD_ASSET',
    id: nextAssetId++,
    asset
}) 