const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const request = require('supertest');

const app = require('../../app');
const dbReset = require('../helpers/reset-db');



it('testIntegration', async function () {});
