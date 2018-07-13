let nextAssetId = 0
export const saveAsset = asset => ({
    type: 'SAVE_ASSET',
    id: nextAssetId++,
    asset
})

export const newAsset = () => ({
    type: 'NEW_ASSET'
}) 

export const cancelAsset = () => ({
    type: 'CANCEL_ASSET'
}) 