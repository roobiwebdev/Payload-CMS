import { Request, Response, NextFunction } from 'express'

const PREVIEW_TOKEN = process.env.PREVIEW_TOKEN || 'your-secret-preview-token'

export const previewAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Only apply to preview routes
  if (!req.path.includes('/api/pages') || !req.query.draft) {
    return next()
  }

  const authHeader = req.headers.authorization
  const token = authHeader?.replace('Bearer ', '')

  if (!token || token !== PREVIEW_TOKEN) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Invalid preview token',
    })
  }

  // Add preview flag to request
  ;(req as any).isPreview = true

  next()
}

export const validatePreviewAccess = (req: Request): boolean => {
  return (req as any).isPreview === true
}
