import { PrismaClientError } from '../errors/types/PrismaClientError';
import { UniqueConstraintError } from '../errors/types/UniqueConstraintError';
import { DatabaseError } from '../errors/types/DatabaseError';

enum PrismaErrors {
  UniqueConstraintFail = 'P2002',
}

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqueConstraintFail:
      return new UniqueConstraintError(e);
    default:
      return new DatabaseError(e.message);
  }
};
