if [ ! -d "./build" ]; then
    echo "Front end build output directory 'build' not found. No s3 upload performed"
    exit 1
fi

echo "Front end build output directory 'build' found. Attempting s3 one directional sync"
Bucket=speakers.bris.tech
aws s3 sync ./build s3://$Bucket --delete

echo "Output to s3 Sync complete"
