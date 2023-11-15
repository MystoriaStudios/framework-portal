'use client';

import React, { useEffect, useState } from 'react';
import { H1 } from '@/components/ui/Typography/H1';
import { supabaseUserClientComponentClient } from '@/supabase-clients/supabaseUserClientComponentClient';
import { getDeployments } from '@/utils/supabase-queries';

export const dynamic = 'force-dynamic';

export default function DeploymentsDashboard() {
  const supabaseClient = supabaseUserClientComponentClient;
  const [deployments, setDeployments] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      const data = await getDeployments(supabaseClient);

      setDeployments(data);

      supabaseClient
        .channel('organizations')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'organizations',
          },
          (data) => {
            setDeployments(deployments + data);
          }
        )
        .subscribe();
    };

    fetch();
  });

  return (
    <div className="w-1/2 mt-12 mx-auto">
      <H1>Deployments</H1>
      {JSON.stringify(deployments)}
    </div>
  );
}
