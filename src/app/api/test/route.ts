import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export const GET = async () => {
    await new Promise(r => setTimeout(r, 30000));

    return NextResponse.json({
        success: true
    });
};
